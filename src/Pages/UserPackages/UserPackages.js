import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SinglePackage from "../../components/SinglePackage/SinglePackage";
import useAuth from "../../hooks/useAuth";
const UserPackages = () => {
  const { user } = useAuth();
  const [userPacks, setUserPacks] = useState([]);

  useEffect(() => {
    axios
      .get("https://young-wildwood-02340.herokuapp.com/users")
      .then((res) => {
        console.log(res.data);
        setUserPacks(res.data);
      });
  }, []);
  const filterPacks = userPacks.filter((packs) => packs.email === user.email);

  const handleDelete = (id) => {
    const confirmation = window.confirm("Do you want to cancel the package?");
    if (confirmation) {
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
        My packages
      </h1>
      <p className="mb-4 text-lg font-medium">
        Total Package{filterPacks.length > 1 ? "s" : ""} {filterPacks.length}
      </p>
      {filterPacks.length === 0 ? (
        <div className="text-center my-20 space-y-4">
          <h1 className="text-gray-500 text-5xl font-bold">
            You Have No Selected Package
          </h1>
          <p className="text-gray-500 text-2xl font-medium">
            <Link className="text-indigo-600" to="/">
              Click Here{" "}
            </Link>
            and select your desired package
          </p>
        </div>
      ) : (
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
