/* eslint-disable @typescript-eslint/camelcase */
import { Resolvers } from '../__generated_types__';
import { encryptValue } from '~/utils/encryptValue';
import { FirebaseData } from '~/graphql/context';

export const resolver: Resolvers = {
  Mutation: {
    async register(_, args, context) {
      const { octokit, netlify, firebase, stripe, vercel } = context.services;
      const { auth, firestore } = firebase;
      const { email, password, domain } = args.input;

      const doc = await firestore().collection('redecardapio.com.br').doc(domain).get();

      if (doc.exists) throw new Error('Domain in use');

      const newUser = await auth().createUser({ email, password });

      const repo = await octokit.repos.createUsingTemplate({
        template_owner: 'cardapios',
        template_repo: 'client',
        name: domain,
        owner: 'cardapios',
        private: false,
      });

      const publicKey = await octokit.actions.getRepoPublicKey({
        owner: 'cardapios',
        repo: domain,
      });

      const validUntil = new Date();
      validUntil.setMonth(validUntil.getMonth() + 1);

      const site = await netlify.createSite({
        body: {
          repo: {
            repo_path: repo.data.full_name,
            repo_branch: repo.data.default_branch,
            repo_url: repo.data.svn_url,
            private: false,
            branch: 'master',
            provider: 'github',
            id: repo.data.id,
            stop_builds: true,
            allowed_branches: ['none'],
          },
          build_settings: {
            stop_builds: true,
          },
        },
      });

      await netlify.setupDomain(site.id, domain);

      await vercel.addDomain(domain, site.ssl_url.replace('https://', ''));

      const url = `https://${domain}.redecardapio.com.br`;

      await octokit.actions.createOrUpdateRepoSecret({
        owner: 'cardapios',
        repo: newUser.uid,
        key_id: publicKey.data.key_id,
        secret_name: 'NEXT_PUBLIC_URL',
        encrypted_value: encryptValue(url, publicKey.data.key),
      });

      await octokit.actions.createOrUpdateRepoSecret({
        owner: 'cardapios',
        key_id: publicKey.data.key_id,
        repo: newUser.uid,
        secret_name: 'NETLIFY_SITE_ID',
        encrypted_value: encryptValue(site.id, publicKey.data.key),
      });

      await octokit.actions.createOrUpdateRepoSecret({
        owner: 'cardapios',
        key_id: publicKey.data.key_id,
        repo: newUser.uid,
        secret_name: 'NEXT_PUBLIC_UID',
        encrypted_value: encryptValue(newUser.uid, publicKey.data.key),
      });

      await octokit.actions.createOrUpdateRepoSecret({
        owner: 'cardapios',
        repo: newUser.uid,
        key_id: publicKey.data.key_id,
        secret_name: 'NEXT_PUBLIC_VALID',
        encrypted_value: encryptValue(validUntil.getTime().toString(), publicKey.data.key),
      });

      const identityId = await netlify.enableIdentity(site.id);

      await netlify.enableGitGateway(site.id, repo.data.full_name);

      await netlify.setupIdentity(site.id, identityId, url);

      await netlify.inviteUser(site.id, identityId, email);

      const customer = await stripe.customers.create({
        email: email,
        description: newUser.uid,
        metadata: {
          url: url,
        },
      });

      const user: FirebaseData = {
        repo: repo.data.name,
        repo_id: repo.data.id,
        site_id: site.id,
        site_url: url,
        identity_id: identityId,
        valid: firestore.Timestamp.fromDate(validUntil),
        customer: customer.id,
        email: email,
        domain,
        name: 'asd',
      };

      await firestore().collection('clientes').doc(email).set(user);
      await firestore().collection('redecardapio.com.br').doc(domain).set({});

      return { name: url };
    },
  },
};
