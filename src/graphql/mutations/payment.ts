/* eslint-disable @typescript-eslint/camelcase */
import { Resolvers } from '../__generated_types__';
import { encryptValue } from '~/utils/encryptValue';
import { triggerAction } from '~/utils/triggerAction';

export const resolver: Resolvers = {
  Mutation: {
    async payment(_, args, context) {
      if (!context.user || !context.userData) throw new Error('s'); // already checked in directives

      const { token, months } = args.input;
      const { stripe, octokit, firebase } = context.services;
      const { user, userData } = context;
      const { firestore } = firebase;

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

      const res = await stripe.charges.create({
        amount: price * 100,
        currency: 'BRL',
        description: userData.domain,
        metadata: {
          email: user,
        },
        source: token,
      });

      if (res.status !== 'succeeded') return false;

      const publicKey = await octokit.actions.getRepoPublicKey({
        owner: 'cardapios',
        repo: userData.domain,
      });

      let validUntil = new Date(userData.valid.toDate());

      const now = new Date();

      if (now.getTime() > validUntil.getTime()) {
        validUntil = now;
      }

      validUntil.setMonth(validUntil.getMonth() + months);

      await firestore()
        .collection('clientes')
        .doc(user)
        .update({
          valid: firestore.Timestamp.fromDate(validUntil),
        });

      await octokit.actions.createOrUpdateRepoSecret({
        owner: 'cardapios',
        repo: userData.domain,
        key_id: publicKey.data.key_id,
        secret_name: 'NEXT_PUBLIC_VALID',
        encrypted_value: encryptValue(validUntil.getTime().toString(), publicKey.data.key),
      });

      await triggerAction('cardapios', userData.domain);

      return true;
    },
  },
};
