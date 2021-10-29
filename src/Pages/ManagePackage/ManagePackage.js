import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoMdTrash } from "react-icons/io";
import { IoIosCheckbox } from "react-icons/io";
const ManagePackage = () => {
  const [userPacks, setUserPacks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => {
      console.log(res.data);
      setUserPacks(res.data);
    });
  }, []);

  const handleStatusChange = (id) => {
    const confirmation = window.confirm(
      "Want to update the status of this package?"
    );
    if (confirmation) {
      axios
        .put(`http://localhost:5000/users/${id}`, {
          packageStatus: "Approved",
        })
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            window.alert("Package Status Updated Successfully!");
            window.location.reload(false);
          }
        });
    }
  };

  const handleDelete = (id) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this package?"
    );
    if (confirmation) {
      axios.delete(`http://localhost:5000/users/${id}`).then((res) => {
        if (res.data.deletedCount > 0) {
          const newPackages = userPacks.filter(
            (userPack) => userPack._id !== id
          );
          setUserPacks(newPackages);
          window.alert("Package has been deleted!");
        }
      });
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-semibold text-gray-800">
        Manage All Packages
      </h1>
      <div className="mt-4">
        <div className="grid grid-cols-5 gap-3 pb-2 mb-4 border-b-2 p-4 place-items-center">
          <h2 className="text-xl font-semibold text-gray-800">User Name</h2>
          <h2 className="text-xl font-semibold text-gray-800">User Email</h2>
          <h2 className="text-xl font-semibold text-gray-800">
            Selected Package
          </h2>
          <h2 className="text-xl font-semibold text-gray-800">
            Package Status
          </h2>
          <h2 className="text-xl font-semibold text-gray-800">Actions</h2>
        </div>
        {userPacks.map((userPack) => (
          <div
            className="grid grid-cols-5 gap-3 my-4 p-4 place-items-center"
            key={userPack._id}
          >
            <p className="font-medium">{userPack.name}</p>
            <p className="font-medium">{userPack.email}</p>
            <p className="font-medium">{userPack.packageName}</p>
            <p className="font-medium">{userPack.packageStatus}</p>
            <div className="flex gap-4">
              <button
                onClick={() => handleStatusChange(userPack._id)}
                className="text-2xl text-green-500 hover:text-green-700 transition-all"
              >
                <IoIosCheckbox />
              </button>
              <button
                onClick={() => handleDelete(userPack._id)}
                className="text-2xl text-red-500 hover:text-red-700 transition-all"
              >
                <IoMdTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagePackage;