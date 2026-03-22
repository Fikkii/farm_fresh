import { createContext, useState, useContext, useEffect } from "react";
import { account, ID } from "../lib/appwrite";
import { redirect } from "react-router-dom";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in on component mount
    const checkSession = async () => {
      try {
        const userAccount = await account.get();
        // Set user state if session exists, regardless of verification
        setUser(userAccount);
      } catch (error) {
        console.log("No active session", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  async function logout() {
    await account.deleteSession('current');
    setUser(null);
  }

  async function signup(formData) {
    await account.create(
        ID.unique(),
        formData.email,
        formData.password,
        `${formData.firstname} ${formData.lastname}`
    );
    // Create session so we can send the verification email
    await account.createEmailPasswordSession(formData.email, formData.password);
    await sendVerificationEmail();

    // We do NOT delete the session, but we set user state to null
    // so the UI treats them as unauthenticated until they verify.
    setUser(null);
  }

  async function login(email, password) {
    // This will create a session or throw if credentials wrong
    await account.createEmailPasswordSession(email, password);
    const userAccount = await account.get();

    if (!userAccount.emailVerification) {
      setUser(null);
      const error = new Error("Verification Required");
      error.name = "VerificationRequired";
      throw error;
    }

    setUser(userAccount);
  }

  const getBaseUrl = () => {
    // Vite defines environment variables as strings, so we check for truthiness
    let url = import.meta.env.VITE_APP_URL;
    
    // Fallback to window.location.origin if VITE_APP_URL is not provided
    if (!url || url === 'undefined' || url === 'null') {
      return window.location.origin.replace(/\/$/, "");
    }

    // Ensure it starts with a protocol
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = `https://${url}`;
    }
    
    // Always strip trailing slash for consistency
    return url.replace(/\/$/, "");
  };

  async function loginWithGoogle() {
    const baseUrl = getBaseUrl();
    await account.createOAuth2Session(
      'google',
      `${baseUrl}/`,
      `${baseUrl}/auth/login`
    )
  }

  async function verifyEmail() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');
    const secret = urlParams.get('secret');

    if (userId && secret) {
      await account.updateVerification(userId, secret);
    } else {
      throw new Error("Invalid verification link");
    }
  }

  async function sendVerificationEmail() {
    const baseUrl = getBaseUrl();
    await account.createVerification(`${baseUrl}/auth/verify/success`);
  }

  async function updateProfile(name) {
    await account.updateName(name);
    setUser(await account.get());
  }

  const contextValue = {
    user,
    loading,
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
      {!loading && children}
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
