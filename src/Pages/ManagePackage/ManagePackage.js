// Importing React and necessary hooks from react
import React, { useEffect, useState } from "react";

// Importing axios
import axios from "axios";

// Importing icons
import { IoMdTrash } from "react-icons/io";
import { IoIosCheckbox } from "react-icons/io";

// Main Manage Package component
const ManagePackage = () => {
  // Get and set user packages in the state
  const [userPacks, setUserPacks] = useState([]);

  // Fetching the users packges from the api
  useEffect(() => {
    axios
      .get("https://young-wildwood-02340.herokuapp.com/users")
      .then((res) => {
        console.log(res.data);
        setUserPacks(res.data);
      });
  }, []);

  // Function for updating the package status
  const handleStatusChange = (id) => {
    const confirmation = window.confirm(
      "Want to update the status of this package?"
    );
    // Requesting for updating the status
    if (confirmation) {
      axios
        .put(`https://young-wildwood-02340.herokuapp.com/users/${id}`, {
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

  // Funtion for deleting the packages of the users
  const handleDelete = (id) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this package?"
    );
    if (confirmation) {
      // Requesting delete method by its id
      axios
        .delete(`https://young-wildwood-02340.herokuapp.com/users/${id}`)
        .then((res) => {
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
      <h1 className="text-3xl font-semibold text-gray-800 text-center lg:text-left">
        {/* Container Title */}
        Manage All Packages
      </h1>
      <div className="mt-4">
        {/* Data Table Headings */}
        <div className="hidden lg:grid grid-cols-5 gap-3 pb-2 mb-4 border-b-2 p-4 place-items-center">
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
        {/* Loading users data */}
        {userPacks.map((userPack) => (
          <div
            className="grid grid-cols-1 border shadow-xl lg:border-0 lg:shadow-none lg:grid-cols-5 gap-3 my-4 p-4 place-items-center"
            key={userPack._id}
          >
            <p className="font-medium">{userPack.name}</p>
            <p className="font-medium">{userPack.email}</p>
            <p className="font-medium">{userPack.packageName}</p>
            <p className="font-medium">{userPack.packageStatus}</p>
            <div className="flex flex-col lg:flex-row gap-4">
              <button
                onClick={() => handleStatusChange(userPack._id)}
                className="py-2 px-4 rounded-full border-2 flex items-center gap-3 text-2xl text-green-500 hover:text-green-700 transition-all"
              >
                <span className="text-lg">Update</span> <IoIosCheckbox />
              </button>
              <button
                onClick={() => handleDelete(userPack._id)}
                className="py-2 px-4 rounded-full border-2 flex items-center gap-3 text-2xl text-red-500 hover:text-red-700 transition-all"
              >
                <span className="text-lg">Delete</span> <IoMdTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagePackage;
