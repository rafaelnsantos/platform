import { DirectiveResolvers } from '../__generated_types__';
import { FirebaseData } from '../context';

export const resolver: DirectiveResolvers = {
  checkOrigin: async (next, user, _, context) => {
    const { firestore, auth } = context.services.firebase;
    const { origin, uid, referer } = context.headers;

    if (!origin) throw new Error('Missing origin');

    if (!referer) throw new Error('Missing referer');

    if (!uid || typeof uid !== 'string') throw new Error('Missing uid');

    const doc = await firestore().collection(uid).doc('info').get();

    const data = doc.data();

    if (!data) throw new Error('missing data');

    context.userData = data as FirebaseData;

    if (origin !== context.userData.siteUrl) throw new Error('Wrong origin');

    if (referer !== `${context.userData.siteUrl}/admin`) throw new Error('Wrong referer');

    context.user = await auth().getUser(uid);

    if (!context.user) throw new Error('Missing user');

    return next();
  },
};
