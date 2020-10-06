import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    // OAuth authentication providers
    Providers.Google({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  // SQL or MongoDB database (or leave empty)
  // database: process.env.DATABASE_URL,
};

export default (req: any, res: any) => NextAuth(req, res, options);
