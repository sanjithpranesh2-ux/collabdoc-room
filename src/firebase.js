import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBj9bLQp_e9JvTUD3dhq0pYdyKnXlCC6Rs",
  authDomain: "collabdoc-3beb4.firebaseapp.com",
  projectId: "collabdoc-3beb4",
  storageBucket: "collabdoc-3beb4.firebasestorage.app",
  messagingSenderId: "159887195090",
  appId: "1:159887195090:web:b96fb64f70b66c6be7e60b",
  measurementId: "G-D3ZL2GHCDE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
