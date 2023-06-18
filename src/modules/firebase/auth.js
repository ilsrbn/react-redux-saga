import { FireAuth } from ".";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const googleAuthProvider = new GoogleAuthProvider();

export const signInWithGoogle = () =>
  signInWithPopup(FireAuth, googleAuthProvider);
export const onAuthChange = (user) => onAuthStateChanged(FireAuth, user);
export const logout = () => signOut(FireAuth);
export const getCurrentUser = () => FireAuth.currentUser;
