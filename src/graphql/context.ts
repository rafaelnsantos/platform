import { firebase } from './services/firebase-admin';
import { netlify } from './services/netlify';
import { octokit } from './services/octokit';
import { circleci } from './services/circleci';
import { dependabot } from './services/dependabot';
import { stripe } from './services/stripe';
import { vercel } from './services/vercel';
import { IncomingMessage } from 'http';

type Req = { req: IncomingMessage };

export interface FirebaseData {
  customer: string;
  email: string;
  identity_id: string;
  repo: string;
  repo_id: number;
  site_id: string;
  site_url: string;
  valid: firebase.firestore.Timestamp;
  domain: string;
}

export const context = ({ req }: Req) => {
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
      vercel,
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

export type Context = ReturnType<typeof context>;
