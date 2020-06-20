import { firebase } from './services/firebase-admin';
import { netlify } from './services/netlify';
import { octokit } from './services/octokit';
import { circleci } from './services/circleci';
import { dependabot } from './services/dependabot';
import { stripe } from './services/stripe';
import { IncomingMessage } from 'http';
import cookie from 'cookie';

type Req = { req: IncomingMessage };

export const context = async ({ req }: Req) => {
  let user: firebase.auth.DecodedIdToken | null = null;
  if (req.headers.cookie) {
    const c = cookie.parse(req.headers.cookie);
    if (c.token) {
      user = await firebase.auth().verifyIdToken(c.token);
    }
  }
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
  };
};

type ThenArg<T> = T extends PromiseLike<infer U> ? U : T;

export type Context = ThenArg<ReturnType<typeof context>>;
