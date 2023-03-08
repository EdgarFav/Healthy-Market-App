import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCm_pfc9WZYcUJ-hkxc9mhUK0NknqzLEqM",
  authDomain: "healthy-market-app.firebaseapp.com",
  projectId: "healthy-market-app",
  storageBucket: "healthy-market-app.appspot.com",
  messagingSenderId: "718987146091",
  appId: "1:718987146091:web:05f4604fd333e6316a922e",
  measurementId: "G-RN1HC5RBZ9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
auth.languageCode = "it";

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

const singWithGoogle = async () => {
  const result = await signInWithPopup(auth, provider);
  const credential = await GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  localStorage.setItem("token", token);
};

// Get a list of cities from your database
export { auth, provider, singWithGoogle };
