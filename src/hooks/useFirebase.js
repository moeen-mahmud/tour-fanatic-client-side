// Importing methods from firebase
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// Importing modules from react
import { useEffect, useState } from "react";

// Importing authentication function
import initializeAuthentication from "../Firebase/firebase.init";

// Initialize the auth system
initializeAuthentication();

// The useFirebase hook
const useFirebase = () => {
  // Getting and setting user data on the state
  const [user, setUser] = useState({});

  // Setting up the loading state
  const [isLoading, setIsLoading] = useState(true);

  // Setting up authentication provider
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // Function for signin with google
  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Calling useEffect for hold the state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return unsubscribed;
  }, [auth]);

  // Function for logout
  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
      })
      .finally(setIsLoading(false));
  };

  return {
    user,
    isLoading,
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;

//ADD LOADING
