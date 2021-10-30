// Importing context
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

// The useAuth hook
const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
