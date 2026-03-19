import { createContext, useState, useContext, useEffect } from "react";
import { account, ID } from "../lib/appwrite";
import { redirect } from "react-router-dom";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is already logged in on component mount
    account.get().then(user => {
      setUser(user);
      console.log("User logged in", user);
    }).catch(error => {
      console.log("No user logged in", error);
    });
  }, []);

  async function logout() {
    await account.deleteSession('current');
    setUser(null);
  }

  async function signup(formData) {
    await account.create({
        userId: ID.unique(),
        name: `${formData.firstname} ${formData.lastname}`,
        email: formData.email,
        ...formData
    });
    login(formData.email, formData.password);
  }

  async function login(email, password) {
    await account.createEmailPasswordSession({
        email,
        password
    });
    setUser(await account.get());
  }

  async function loginWithGoogle() {
    await account.createOAuth2Session({
      provider: 'google',
      success: 'http://localhost:5173/',
      failure: 'http://localhost:5173/auth/login',
    })
  }

  async function verifyEmail() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');
    const secret = urlParams.get('secret');

    if (userId && secret) {
      await account.updateVerification(userId, secret);
      setLoggedInUser(await account.get());
    } else {
      throw new Error("Invalid verification link");
    }
  }

  async function sendVerificationEmail() {
    await account.createVerification('http://localhost:5173/auth/verify');
  }

  async function updateProfile(name) {
    await account.updateName(name);
    setUser(await account.get());
  }

  const contextValue = {
    user,
    logout,
    signup,
    login,
    verifyEmail,
    sendVerificationEmail,
    loginWithGoogle,
    updateProfile
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
