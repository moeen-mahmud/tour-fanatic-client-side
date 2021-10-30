import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const PlaceOrder = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [pack, setPack] = useState({});
  const history = useHistory();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axios
      .get(`https://young-wildwood-02340.herokuapp.com/packages/${id}`)
      .then((res) => {
        console.log(res.data);
        setPack(res.data);
      });
  }, [id]);
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
    <div className="p-10 flex justify-around gap-10">
      <div className="w-1/2">
        <h1 className="text-3xl text-gray-800 font-semibold">Review Package</h1>
        <form
          className="mt-8 flex flex-col gap-5 w-2/3"
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
          <div className="flex items-center gap-3 mb-4">
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
      <div className="w-1/2">
        <h1 className="text-3xl text-gray-800 font-semibold">
          Package Details
        </h1>
        <div className="mt-8 p-4 rounded shadow-xl">
          <div className="flex gap-3">
            <img
              className="w-1/4 rounded"
              src={pack.packageImage}
              alt={pack.packageName}
            />
            <div className="space-y-4">
              <h1 className="text-2xl font-semibold text-gray-800">
                {pack.packageName}
              </h1>
              <p>{pack.packageDesc}</p>
              <div className="flex items-center gap-5">
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
