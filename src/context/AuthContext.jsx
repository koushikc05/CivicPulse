import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import {
  loginWithEmail,
  loginWithGoogle,
  registerWithEmail,
  logout,
  getUserData
} from "../firebase/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listen to Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        // Fetch user role and data from Firestore
        const data = await getUserData(user.uid);
        setUserData(data);
      } else {
        setUserData(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // Email login
  const login = async (email, password) => {
    const user = await loginWithEmail(email, password);
    const data = await getUserData(user.uid);
    setUserData(data);
    return data;
  };

  // Google login
  const googleLogin = async (role) => {
    const user = await loginWithGoogle(role);
    const data = await getUserData(user.uid);
    setUserData(data);
    return data;
  };

  // Register
  const register = async (email, password, name, role) => {
    const user = await registerWithEmail(email, password, name, role);
    const data = await getUserData(user.uid);
    setUserData(data);
    return data;
  };

  // Logout
  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
    setUserData(null);
  };

  const value = {
    currentUser,
    userData,
    loading,
    login,
    googleLogin,
    register,
    logout: logoutUser,
    isAdmin: userData?.role === "admin",
    isFieldWorker: userData?.role === "field_worker",
    isVolunteer: userData?.role === "volunteer"
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
