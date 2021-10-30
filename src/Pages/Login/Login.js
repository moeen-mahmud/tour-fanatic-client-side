// Importing React
import React from "react";

// Importing useAuth hook for authentication
import useAuth from "../../hooks/useAuth";

// Importing the Google icon
import { FcGoogle } from "react-icons/fc";

// Importing necessary hooks from react router
import { useHistory, useLocation } from "react-router";

// Main Login component
const Login = () => {
  // Getting the methods from the hook
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();

  // Setting up the redirect url
  const redirectUrl = location.state?.from || "/";

  // Function for sign in with google
  const handleGoogleSignIn = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirectUrl);
    });
  };
  return (
    <div className="p-10 flex justify-center">
      <div className="p-4 lg:p-10 rounded shadow-xl flex flex-col gap-10 justify-center items-center">
        <h1 className="font-bold text-3xl">Please Login</h1>
        <button
          className="py-3 px-10 rounded-full border-2 flex items-center gap-5 font-semibold"
          onClick={handleGoogleSignIn}
        >
          <FcGoogle /> Login With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
