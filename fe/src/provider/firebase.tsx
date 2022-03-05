import { createContext, useContext } from 'react';
import { initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';

const FirebaseContext = createContext<Auth | undefined>(undefined);
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

function FirebaseProvider({ children }) {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  return (
    <FirebaseContext.Provider value={auth}>{children}</FirebaseContext.Provider>
  );
}

function useFirebaseContext() {
  const app = useContext(FirebaseContext);
  if (!app) throw new Error('Cannot use Firebase context outside of provider');
  return app;
}

export { useFirebaseContext, FirebaseProvider };
