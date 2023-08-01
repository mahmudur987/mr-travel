import React from "react";
import { useState } from "react";
import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  signInWithPopup,
  sendPasswordResetEmail,
  AuthProvider,
  User,
} from "firebase/auth";
import { useEffect } from "react";
import app from "@/Firebase/Firebase.config";
import {
  UserContextType,
  authContextDefaultValues,
} from "@/interface/userInterface";

export const AuthContext = createContext(authContextDefaultValues);

const auth = getAuth(app);

const UserContext: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, SetUser] = useState<User | null>(null);
  const [loading, Setloading] = useState(false);

  const signUp = (email: string, password: string) => {
    Setloading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email: string, password: string) => {
    Setloading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogIn = (provider: AuthProvider) => {
    Setloading(true);

    return signInWithPopup(auth, provider);
  };
  const githubLogIn = (provider: AuthProvider) => {
    Setloading(true);

    return signInWithPopup(auth, provider);
  };

  const updateUserProfile = (profile: {
    displayName?: string;
    photoURL?: string;
  }): Promise<void> => {
    Setloading(true);
    return updateProfile(auth.currentUser!, profile); // Use non-null assertion here
  };

  const passwordReset = (email: string) => {
    return sendPasswordResetEmail(auth, email);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      SetUser(currentUser);
      Setloading(false);
      // console.log("currentuser", currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authinfo: UserContextType = {
    user,
    SetUser,
    signUp,
    login,
    updateUserProfile,
    logout,
    googleLogIn,
    githubLogIn,
    loading,
    passwordReset,
    Setloading,
  };
  return (
    <>
      {" "}
      <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default UserContext;
