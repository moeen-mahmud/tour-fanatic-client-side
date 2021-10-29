import axios from "axios";
import React, { useEffect, useState } from "react";
import SinglePackage from "../../components/SinglePackage/SinglePackage";
import useAuth from "../../hooks/useAuth";
const UserPackages = () => {
  const { user } = useAuth();
  const [userPacks, setUserPacks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => {
      console.log(res.data);
      setUserPacks(res.data);
    });
  }, []);
  const filterPacks = userPacks.filter((packs) => packs.email === user.email);

  const handleDelete = (id) => {
    const confirmation = window.confirm("Do you want to cancel the package?");
    if (confirmation) {
      axios.delete(`http://localhost:5000/users/${id}`).then((res) => {
        if (res.data.deletedCount > 0) {
          const newUserPacks = userPacks.filter((upack) => upack._id !== id);
          setUserPacks(newUserPacks);
        }
      });
    }
  };

  console.log(filterPacks);

  return (
    <div className="p-10">
      <h1 className="mb-10 text-3xl font-semibold text-gray-800">
        My packages
      </h1>
      <p className="mb-4 text-lg font-medium">
        Total Package{filterPacks.length > 1 ? "s" : ""} {filterPacks.length}
      </p>
      <div className="flex flex-col lg:flex-row">
        {filterPacks.map((pack) => (
          <SinglePackage
            pack={pack}
            key={pack._id}
            handleDelete={handleDelete}
          ></SinglePackage>
        ))}
      </div>
    </div>
  );
};

export default UserPackages;
