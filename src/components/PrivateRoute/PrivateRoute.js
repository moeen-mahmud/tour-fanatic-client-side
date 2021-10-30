// Importing React
import React from "react";

// Importing modules from react rounter
import { Redirect, Route } from "react-router";

// Importing authentication from the hook
import useAuth from "../../hooks/useAuth";

// Importing Spinner component
import Spinner from "../Spinner/Spinner";

// Main PrivateRoute Component
const PrivateRoute = ({ children, ...rest }) => {
  // Getting functions from the hook
  const { user, isLoading } = useAuth();

  // Showing a spinner while the page is reloading
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    // The main Route
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: location,
              },
            }}
          />
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
