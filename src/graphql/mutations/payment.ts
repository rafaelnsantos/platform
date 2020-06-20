/* eslint-disable @typescript-eslint/camelcase */
import { Resolvers } from '../__generated_types__';
import { encryptValue } from '~/utils/encryptValue';
import { triggerAction } from '~/utils/triggerAction';

export const resolver: Resolvers = {
  Mutation: {
    async payment(_, args, context) {
      const { uid, token, months } = args.input;
      const { stripe, octokit, firebase } = context.services;

      let price: number;

      switch (months) {
        case 1:
          price = 20;
          break;
        case 3:
          price = 50;
          break;
        case 12:
          price = 180;
          break;
        default:
          throw new Error('Invalid months');
      }

      const firestore = firebase.firestore();

      const doc = firestore.collection(uid).doc('info');

      const data = (await doc.get()).data();

      if (!data) return false;

      const res = await stripe.charges.create({
        amount: price * 100,
        currency: 'BRL',
        description: data.email,
        metadata: {
          uid: uid,
        },
        source: token,
      });

      if (res.status !== 'succeeded') return false;

      const publicKey = await octokit.actions.getRepoPublicKey({
        owner: 'cardapios',
        repo: uid,
      });

      let validUntil = new Date(data.valid.toDate());

      const now = new Date();

      if (now.getTime() > validUntil.getTime()) {
        validUntil = now;
      }

      validUntil.setMonth(validUntil.getMonth() + months);

      await doc.update({
        valid: firebase.firestore.Timestamp.fromDate(validUntil),
      });

      await octokit.actions.createOrUpdateRepoSecret({
        owner: 'cardapios',
        repo: uid,
        key_id: publicKey.data.key_id,
        secret_name: 'NEXT_PUBLIC_VALID',
        encrypted_value: encryptValue(validUntil.getTime().toString(), publicKey.data.key),
      });

      await triggerAction('cardapios', uid);

      return true;
    },
  },
};
