import { DirectiveResolvers } from '../__generated_types__';
import cookie from 'cookie';
import { FirebaseData } from '../context';

export const resolver: DirectiveResolvers = {
  auth: async (next, user, _, context) => {
    const { auth, firestore } = context.services.firebase;
    const { headers } = context;

    if (!headers.cookie) throw new Error('missing cookie');

    const parsedCookie = cookie.parse(headers.cookie);

    if (!parsedCookie.token) throw new Error('missing token');

    const decoded = await auth().verifyIdToken(parsedCookie.token);

    context.user = await auth().getUser(decoded.uid);

    if (!context.user) throw new Error('User not found');

    const doc = await firestore().collection(user.uid).doc('info').get();

    const data = doc.data();

    if (!data) throw new Error('Missing data');

    context.userData = data as FirebaseData;

    return next();
  },
};
