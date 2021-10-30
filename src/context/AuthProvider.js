// Importing necessary modules
import React, { createContext } from "react";

// Importing firebase functionality from the hook
import useFirebase from "../hooks/useFirebase";

// Creating the context
export const AuthContext = createContext();

// Main Auth Provider component
const AuthProvider = ({ children }) => {
  const allAuthContext = useFirebase();
  return (
    <AuthContext.Provider value={allAuthContext}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
