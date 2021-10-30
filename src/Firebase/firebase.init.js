// Initialize firebase app
import { initializeApp } from "firebase/app";

// Importing firebse configuration
import firebaseConfig from "./firebase.config";

// Funtion for initializing auth
const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthentication;
