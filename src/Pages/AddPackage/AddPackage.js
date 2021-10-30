import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
const AddPackage = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://young-wildwood-02340.herokuapp.com/packages", data)
      .then((res) => {
        if (res.data.insertedId) {
          window.alert("Package has been added successfully!");
          reset();
        }
      });
  };

  return (
    <div className="p-10 flex justify-center">
      <div className="p-10 shadow-xl rounded lg:w-1/3">
        <h1 className="text-2xl text-center lg:text-left lg:text-3xl font-bold text-gray-800 mb-4">
          Add A Package
        </h1>
        <form
          className="flex flex-col space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register("packageName")}
            className="p-3 border-b-2"
            placeholder="Package Name"
            required
          />
          <input
            {...register("packageDesc")}
            className="p-3 border-b-2"
            placeholder="Package Description"
            required
          />
          <input
            {...register("packageDuration")}
            className="p-3 border-b-2"
            placeholder="Duration"
            required
          />
          <input
            {...register("packageImage")}
            className="p-3 border-b-2"
            placeholder="Package Image Link"
            required
          />
          <input
            {...register("packagePrice")}
            className="p-3 border-b-2"
            placeholder="Package Price"
            required
          />
          <button
            className="px-6 py-3 gap-3 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition-all"
            type="submit"
          >
            Add Package
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPackage;
