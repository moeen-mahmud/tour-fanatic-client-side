import axios from "axios";
import React, { useEffect, useState } from "react";
import Package from "../Package/Package";

const PackageContainer = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/packages").then((res) => {
      console.log(res.data); //TODO: have to remove console.log
      setPackages(res.data);
    });
  }, []);

  const handleBooking = (id) => {
    axios.get(`http://localhost:5000/packages/${id}`).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div className="p-10 my-8">
      <h1 className="text-center font-semibold text-5xl text-gray-800">
        We've got some great deals
      </h1>
      <p className="text-lg text-indigo-600 font-medium text-center my-6">
        Discover Now
      </p>
      <div className="grid grid-cols-1 gap-10  lg:grid-cols-3 ">
        {packages.map((pack) => (
          <Package
            pack={pack}
            key={pack._id}
            handleBooking={handleBooking}
          ></Package>
        ))}
      </div>
    </div>
  );
};

export default PackageContainer;
