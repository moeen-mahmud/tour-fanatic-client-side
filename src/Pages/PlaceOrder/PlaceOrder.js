// Importing React and necessary hooks
import React, { useEffect, useState } from "react";

// Importing axios 🔥
import axios from "axios";

// Importing react hook form
import { useForm } from "react-hook-form";

// Importing hooks from react rounter
import { useHistory, useParams } from "react-router";

// Importing the hook for auth
import useAuth from "../../hooks/useAuth";

// Main Place Order component
const PlaceOrder = () => {
  // Getting the user from the hook
  const { user } = useAuth();

  // Get the id from url parameter
  const { id } = useParams();

  // Get and set the package in state
  const [pack, setPack] = useState({});

  // Using history for rerouting
  const history = useHistory();

  // Getting form methods
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Load the package by its id
  useEffect(() => {
    axios
      .get(`https://young-wildwood-02340.herokuapp.com/packages/${id}`)
      .then((res) => {
        setPack(res.data);
      });
  }, [id]);

  // Creating a new data collection consists of user's packages
  const onSubmit = (data) => {
    axios
      .post("https://young-wildwood-02340.herokuapp.com/users", {
        name: data.name,
        email: data.email,
        address: data.address,
        date: data.date,
        packageName: pack.packageName,
        packageImage: pack.packageImage,
        packageStatus: "Pending",
      })
      .then((res) => {
        if (res.data.insertedId) {
          window.alert("Package has been placed for review!");
          reset();
          history.push("/my-packages");
        }
      });
  };

  return (
    <div className="p-10 flex flex-col-reverse lg:flex-row justify-around gap-10">
      <div className="lg:w-1/2">
        {/* Form title */}
        <h1 className="text-3xl text-gray-800 font-semibold">Review Package</h1>
        {/* User Details Form */}
        <form
          className="mt-8 flex flex-col gap-5 lg:w-2/3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-3">
            <label
              className="pl-3 text-xl text-indigo-600 font-semibold"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="p-3 border-b-2"
              {...register("name")}
              value={user.displayName || ""}
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <label
              className="pl-3 text-xl text-indigo-600 font-semibold"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="p-3 border-b-2"
              {...register("email")}
              value={user.email || ""}
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <label
              className="pl-3 text-xl text-indigo-600 font-semibold"
              htmlFor="address"
            >
              Address
            </label>
            <input
              className="p-3 border-b-2"
              {...register("address")}
              placeholder="Address Details"
              required
            />
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center gap-3 mb-4">
            <div className="flex flex-col gap-3 relative">
              <label
                className="pl-3 text-xl text-indigo-600 font-semibold"
                htmlFor="number"
              >
                Phone Number
              </label>
              <input
                className="p-3 border-b-2"
                {...register("number", { pattern: /^\d+$/ })}
                placeholder="01XXXXXXXXX"
                minLength="11"
                required
              />
              {errors.number && (
                <span className="text-sm text-red-500 absolute -bottom-6">
                  Only Numbers are allowed
                </span>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <label
                className="pl-3 text-xl text-indigo-600 font-semibold"
                htmlFor="date"
              >
                Start Date
              </label>
              <input
                className="p-3 border-b-2"
                type="date"
                {...register("date")}
                required
              />
            </div>
          </div>
          <button
            className="py-3 px-6 rounded bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all"
            type="submit"
          >
            Finalize Package
          </button>
        </form>
      </div>
      <div className="lg:w-1/2">
        {/* Package Details */}
        <h1 className="text-3xl text-gray-800 font-semibold">
          Package Details
        </h1>
        <div className="mt-8 p-4 rounded shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center gap-3">
            <img
              className="lg:w-1/3 rounded"
              src={pack.packageImage}
              alt={pack.packageName}
            />
            <div className="space-y-4">
              <h1 className="text-2xl font-semibold text-gray-800">
                {pack.packageName}
              </h1>
              <p>{pack.packageDesc}</p>
              <div className="flex flex-col lg:flex-row items-center gap-5">
                <p className="text-xl font-semibold text-indigo-600">
                  Duration: {pack.packageDuration}
                </p>
                <p className="text-xl font-semibold text-indigo-600">
                  Price: {pack.packagePrice} TAKA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
