import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import jwt from 'jsonwebtoken';

export default (req: any, res: any) =>
  NextAuth(req, res, {
    providers: [
      // OAuth authentication providers
      Providers.Google({
        clientId: process.env.GOOGLE_ID as string,
        clientSecret: process.env.GOOGLE_SECRET as string,
      }),
    ],
    session: {
      jwt: true,
    },
    callbacks: {
      jwt: async (tokens, user, account, profile, isNewUser) => {
        const token = jwt.sign({ t: 1 }, process.env.JWT_SECRET as string, {
          audience: process.env.GOOGLE_ID as string,
        });
        return Promise.resolve({ ...tokens, verify: token });
      },
    },
  });
