import { useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.init";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useFirebase = () => {
  // User State
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // ========== Sign In options ========== //

  const auth = getAuth(app);
  const location = useLocation();
  const navigate = useNavigate();
  //Providers
  const googleProvider = new GoogleAuthProvider();

  // Google Sign In
  const signInWithGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        const route = location.state?.from || "/";
        navigate(route);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  // Observe Auth State Change
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });
  }, [auth]);

  // Log out
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    error,
    logout,
    isLoading,
    signInWithGoogle,
  };
};

export default useFirebase;
