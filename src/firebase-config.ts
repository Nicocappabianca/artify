import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey,
  authDomain: "artify-f893b.firebaseapp.com",
  projectId: "artify-f893b",
  storageBucket: "artify-f893b.appspot.com",
  messagingSenderId: "285770654532",
  appId: "1:285770654532:web:6bfac869d8501af00e6d11",
};

const app = initializeApp(firebaseConfig);

const Auth = getAuth(app);
const Provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { Auth, Provider, db, storage };
