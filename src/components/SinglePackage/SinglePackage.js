import React from "react";
import { FaTrash } from "react-icons/fa";

const SinglePackage = ({ pack, handleDelete }) => {
  return (
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
        <p className="text-lg">
          <span className="font-medium text-indigo-600">Start Date:</span>{" "}
          {pack.date}
        </p>
        <p>
          <span className="text-lg font-medium text-indigo-600">Status</span>{" "}
          <span
            className={
              pack.packageStatus === "Pending"
                ? "p-1 rounded bg-yellow-600 text-white"
                : "p-1 rounded bg-green-600 text-white"
            }
          >
            {pack.packageStatus}
          </span>
        </p>
        <button
          onClick={() => handleDelete(pack._id)}
          className="flex items-center gap-3 bg-indigo-300 text-gray-300 px-6 py-3 rounded font-semibold hover:bg-indigo-400 transition-all"
        >
          Cancel <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default SinglePackage;
