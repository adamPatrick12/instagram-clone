import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVpWWO6cgIAUVchdd5qLm8h9luaNWLiS8",
  authDomain: "instagram-clone-123-8c7cd.firebaseapp.com",
  projectId: "instagram-clone-123-8c7cd",
  storageBucket: "instagram-clone-123-8c7cd.appspot.com",
  messagingSenderId: "154214072261",
  appId: "1:154214072261:web:cfd6c8d2cfd7f21768d5ac",
  measurementId: "G-T2LMT6S5RQ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
