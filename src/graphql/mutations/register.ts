/* eslint-disable @typescript-eslint/camelcase */
import { Resolvers } from '../__generated_types__';
import { encryptValue } from '~/utils/encryptValue';

export const resolver: Resolvers = {
  Mutation: {
    async register(_, args, context) {
      const { octokit, netlify, firebase, stripe } = context.services;
      const auth = firebase.auth();
      const firestore = firebase.firestore();
      const { email, password } = args.input;

      const newUser = await auth.createUser({ email, password });

      const repo = await octokit.repos.createUsingTemplate({
        template_owner: 'cardapios',
        template_repo: 'client',
        name: newUser.uid,
        owner: 'cardapios',
        private: false,
      });

      const publicKey = await octokit.actions.getRepoPublicKey({
        owner: 'cardapios',
        repo: newUser.uid,
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

      await netlify.disableSignup(site.id, identityId);

      await netlify.enableGoogle(site.id, identityId);

      await netlify.inviteUser(site.id, identityId, email);

      const customer = await stripe.customers.create({
        email: email,
        description: newUser.uid,
        metadata: {
          url: site.ssl_url,
        },
      });

      await firestore
        .collection(newUser.uid)
        .doc('info')
        .set({
          organization: 'cardapios',
          repo: repo.data.name,
          repo_id: repo.data.id,
          site_id: site.id,
          site_url: site.ssl_url,
          identity_id: identityId,
          valid: firebase.firestore.Timestamp.fromDate(validUntil),
          customer: customer.id,
          email: email,
        });

      return { name: site.ssl_url };
    },
  },
};
