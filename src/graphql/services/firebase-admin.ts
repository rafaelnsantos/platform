import firebase from 'firebase-admin';

if (firebase.apps.length === 0) {
  firebase.initializeApp({
    credential: firebase.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    }),
    databaseURL: 'https://platform-8cf3f.firebaseio.com',
  });
}

export { firebase };
