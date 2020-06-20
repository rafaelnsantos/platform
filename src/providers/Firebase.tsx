import React, { createContext, useContext, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setUser, clearUser } from '~/stores/user';
import { useRouter } from 'next/dist/client/router';

export const firebaseContext = createContext<typeof firebase>(firebase);

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const { Provider } = firebaseContext;

interface FirebaseProviderProps {
  children: React.ReactNode;
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };

export function FirebaseProvider({ children }: FirebaseProviderProps) {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const sub = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken(true).then((token) => {
          cookies.set('token', token);
          dispatch(
            setUser({
              email: user.email as string,
              isVerified: user.emailVerified,
            })
          );
          router.push('/dashboard');
        });
      } else {
        dispatch(clearUser());
        cookies.remove('token');
      }
    });

    return () => {
      sub();
    };
  }, []);

  return <Provider value={firebase}>{children}</Provider>;
}

export const useFirebase = () => useContext(firebaseContext);
