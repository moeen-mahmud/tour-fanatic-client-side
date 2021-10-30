// Importing necessary modules from react
import React, { useEffect, useState } from "react";

// Importing Axios
import axios from "axios";

// Importing the module from react router
import { useHistory } from "react-router";

// Importing Package component
import Package from "../Package/Package";

// Importing Spinner component
import Spinner from "../Spinner/Spinner";

// Main Package Container component
const PackageContainer = () => {
  // Set all package in the state
  const [packages, setPackages] = useState([]);

  // Using history for rerouting
  const history = useHistory();

  // Using useEffect hook for fetching data from API server
  useEffect(() => {
    axios
      .get("https://young-wildwood-02340.herokuapp.com/packages")
      .then((res) => {
        setPackages(res.data);
      });
  }, []);

  // Give booking button
  const handleBooking = (id) => {
    // Get package by its id
    axios
      .get(`https://young-wildwood-02340.herokuapp.com/packages/${id}`)
      .then((res) => {});
    history.push(`/place-order/${id}`);
  };

  return (
    <div className="p-10 my-8">
      {/* Container title */}
      <h1 className="text-center font-semibold text-3xl lg:text-5xl text-gray-800">
        We've got some great deals
      </h1>
      <p className="text-lg text-indigo-600 font-medium text-center my-6">
        Discover Now
      </p>
      {packages.length === 0 ? (
        // Showing a loading spinner while data is loading
        <Spinner></Spinner>
      ) : (
        <div className="grid grid-cols-1 gap-10  lg:grid-cols-3 ">
          {/* Mapping through all packages and set it in Package component */}
          {packages.map((pack) => (
            <Package
              pack={pack}
              key={pack._id}
              handleBooking={handleBooking}
            ></Package>
          ))}
        </div>
      )}
    </div>
  );
};

export default PackageContainer;
