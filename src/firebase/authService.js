import { auth, db } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  updateProfile
} from "firebase/auth";
import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp
} from "firebase/firestore";

const googleProvider = new GoogleAuthProvider();

// Login with email and password
export const loginWithEmail = async (email, password) => {
  const result = await signInWithEmailAndPassword(auth, email, password);
  return result.user;
};

// Login with Google popup
export const loginWithGoogle = async (role) => {
  const result = await signInWithPopup(auth, googleProvider);
  const user = result.user;
  // Check if user already exists in Firestore
  const userDoc = await getDoc(doc(db, "users", user.uid));
  if (!userDoc.exists()) {
    // First time Google login → save with selected role
    await setDoc(doc(db, "users", user.uid), {
      name: user.displayName,
      email: user.email,
      role: role || "volunteer",
      photoURL: user.photoURL,
      createdAt: serverTimestamp()
    });
  }
  return user;
};

// Register with email and password
export const registerWithEmail = async (email, password, name, role) => {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  const user = result.user;
  // Update Firebase Auth display name
  await updateProfile(user, { displayName: name });
  // Save user data to Firestore
  await setDoc(doc(db, "users", user.uid), {
    name,
    email,
    role,
    photoURL: null,
    createdAt: serverTimestamp()
  });
  return user;
};

// Logout
export const logout = async () => {
  await signOut(auth);
};

// Get user data from Firestore
export const getUserData = async (uid) => {
  const userDoc = await getDoc(doc(db, "users", uid));
  if (userDoc.exists()) {
    return { uid, ...userDoc.data() };
  }
  return null;
};
