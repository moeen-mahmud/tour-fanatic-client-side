import React from "react";
import { AiFillPushpin } from "react-icons/ai";
const Package = ({ pack, handleBooking }) => {
  return (
    <div className="text-justify space-y-4 shadow-xl py-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <div className="overflow-hidden">
        <img
          className="lg:w-96 lg:h-52 mx-auto rounded"
          src={pack.packageImage}
          alt={pack.packageName}
        />
      </div>
      <div className="px-4">
        <h1 className="text-gray-800 text-3xl font-semibold mb-4">
          {pack.packageName}
        </h1>
        <p className="h-52 font-medium leading-relaxed">{pack.packageDesc}</p>
        <button
          onClick={() => handleBooking(pack._id)}
          className="flex items-center gap-3 p-3 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 transition-all"
        >
          Book Now <AiFillPushpin />
        </button>
      </div>
    </div>
  );
};

export default Package;
