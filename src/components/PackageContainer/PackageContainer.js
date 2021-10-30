import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Package from "../Package/Package";
import Spinner from "../Spinner/Spinner";

const PackageContainer = () => {
  const [packages, setPackages] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .get("https://young-wildwood-02340.herokuapp.com/packages")
      .then((res) => {
        setPackages(res.data);
      });
  }, []);
  //TODO: will add a loading spinner
  const handleBooking = (id) => {
    axios
      .get(`https://young-wildwood-02340.herokuapp.com/packages/${id}`)
      .then((res) => {
        console.log(res.data);
      });
    history.push(`/place-order/${id}`);
  };

  return (
    <div className="p-10 my-8">
      <h1 className="text-center font-semibold text-5xl text-gray-800">
        We've got some great deals
      </h1>
      <p className="text-lg text-indigo-600 font-medium text-center my-6">
        Discover Now
      </p>
      {packages.length === 0 ? (
        <Spinner></Spinner>
      ) : (
        <div className="grid grid-cols-1 gap-10  lg:grid-cols-3 ">
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
