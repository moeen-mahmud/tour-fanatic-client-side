// Importing React and necessary hooks
import React, { useEffect, useState } from "react";

// Importing Axios
import axios from "axios";

// Importing module from react router
import { Link } from "react-router-dom";

// Importing Single Package component
import SinglePackage from "../../components/SinglePackage/SinglePackage";

// Importing the hook for auth
import useAuth from "../../hooks/useAuth";

// Main User Package component
const UserPackages = () => {
  // Get the user from the hook
  const { user } = useAuth();

  // Set the user packages in the state
  const [userPacks, setUserPacks] = useState([]);

  // Fetching the users data from the api
  useEffect(() => {
    axios
      .get("https://young-wildwood-02340.herokuapp.com/users")
      .then((res) => {
        console.log(res.data);
        setUserPacks(res.data);
      });
  }, []);

  // Filter the user's packages by their email id
  const filterPacks = userPacks.filter((packs) => packs.email === user.email);

  // Function for cancelling the package by its id
  const handleDelete = (id) => {
    const confirmation = window.confirm("Do you want to cancel the package?");
    if (confirmation) {
      // Requesting delete method
      axios
        .delete(`https://young-wildwood-02340.herokuapp.com/users/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            const newUserPacks = userPacks.filter((upack) => upack._id !== id);
            setUserPacks(newUserPacks);
          }
        });
    }
  };

  return (
    <div className="p-10">
      <h1 className="mb-10 text-3xl font-semibold text-gray-800">
        {/* Container Title */}
        My packages
      </h1>
      <p className="mb-4 text-lg font-medium">
        Total Package{filterPacks.length > 1 ? "s" : ""} {filterPacks.length}
      </p>
      {/* This will show if the user has no package selected */}
      {filterPacks.length === 0 ? (
        <div className="text-center my-20 space-y-4">
          <h1 className="text-gray-500 text-2xl lg:text-5xl font-bold">
            You Have No Selected Package
          </h1>
          <p className="text-gray-500 text-xl lg:text-2xl font-medium">
            <Link className="text-indigo-600" to="/">
              Click Here{" "}
            </Link>
            and select your desired package
          </p>
        </div>
      ) : (
        // This will show when the user has at least one package
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          {filterPacks.map((pack) => (
            <SinglePackage
              pack={pack}
              key={pack._id}
              handleDelete={handleDelete}
            ></SinglePackage>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserPackages;
