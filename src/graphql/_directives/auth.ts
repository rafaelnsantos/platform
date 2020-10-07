import { DirectiveResolvers } from '../__generated_types__';
import cookie from 'cookie';
import { FirebaseData } from '../context';

export const resolver: DirectiveResolvers = {
  auth: async (next, params, _, context) => {
    const { auth, firebase } = context.services;
    const { firestore } = firebase;
    const { headers } = context;

    if (!headers.cookie) throw new Error('missing cookie');

    const parsedCookie = cookie.parse(headers.cookie);

    const token = parsedCookie['next-auth.session-token'];

    if (!token) throw new Error('missing token');

    const email = await auth.verifyToken(token);
    if (!email) throw new Error('User not found');

    const doc = await firestore().collection('clientes').doc(email).get();

    const data = doc.data();

    if (!data) throw new Error('Missing data');
    context.userData = data as FirebaseData;

    return next();
  },
};
