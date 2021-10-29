import React from "react";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const redirectUrl = location.state?.from || "/";

  const handleGoogleSignIn = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirectUrl);
    });
  };
  return (
    <div className="p-10 flex justify-center">
      <div className="p-10 rounded shadow-xl flex flex-col gap-10 justify-center items-center">
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
