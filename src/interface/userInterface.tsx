import { GoogleAuthProvider } from "firebase/auth";
import {
  GithubAuthProvider,
  User,
  UserCredential,
} from "firebase/auth/cordova";

export interface UserContextType {
  user: User | null;
  SetUser: React.Dispatch<React.SetStateAction<User | null>>;
  signUp: (email: string, password: string) => Promise<UserCredential>;
  login: (email: string, password: string) => Promise<UserCredential>;
  googleLogIn: (provider: GoogleAuthProvider) => Promise<UserCredential>;
  githubLogIn: (provider: GithubAuthProvider) => Promise<UserCredential>;
  updateUserProfile: (profile: {
    displayName?: string;
    photoURL?: string;
  }) => Promise<void>;
  passwordReset: (email: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;

  Setloading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const authContextDefaultValues: UserContextType = {
  user: null,
  SetUser: () => {},
  signUp: async (email: string, password: string) => {
    return {} as UserCredential; // Provide a default implementation or handle as needed
  },
  login: async (email: string, password: string) => {
    return {} as UserCredential; // Provide a default implementation or handle as needed
  },
  googleLogIn: async (provider: GoogleAuthProvider) => {
    return {} as UserCredential; // Provide a default implementation or handle as needed
  },
  githubLogIn: async (provider: GithubAuthProvider) => {
    return {} as UserCredential; // Provide a default implementation or handle as needed
  },
  updateUserProfile: async (profile: {
    displayName?: string;
    photoURL?: string;
  }) => {
    // Provide a default implementation or handle as needed
  },
  passwordReset: async (email: string) => {
    // Provide a default implementation or handle as needed
  },
  logout: async () => {
    // Provide a default implementation or handle as needed
  },
  loading: false, // Set the default value for loading
  Setloading: () => {}, // Set the default value for Setloading
};
