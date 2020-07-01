import { firebase } from './services/firebase-admin';
import { netlify } from './services/netlify';
import { octokit } from './services/octokit';
import { circleci } from './services/circleci';
import { dependabot } from './services/dependabot';
import { stripe } from './services/stripe';
import { IncomingMessage } from 'http';

type Req = { req: IncomingMessage };

export interface FirebaseData {
  stripeCustomer: string;
  email: string;
  identityId: string;
  repo: string;
  repoId: number;
  siteId: string;
  siteUrl: string;
  valid: firebase.firestore.Timestamp;
}

export const context = async ({ req }: Req) => {
  let user: firebase.auth.UserRecord | undefined;
  let userData: FirebaseData | undefined;

  return {
    user,
    services: {
      firebase,
      netlify,
      octokit,
      circleci,
      dependabot,
      stripe,
    },
    headers: {
      uid: req.headers.uid,
      cookie: req.headers.cookie,
      origin: req.headers.origin,
      referer: req.headers.referer,
    },
    userData,
  };
};

type ThenArg<T> = T extends PromiseLike<infer U> ? U : T;

export type Context = ThenArg<ReturnType<typeof context>>;
