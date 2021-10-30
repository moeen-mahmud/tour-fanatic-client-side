// Importing React
import React from "react";

// Importing icon from react icons
import { AiFillPushpin } from "react-icons/ai";

// Main Package component
const Package = ({ pack, handleBooking }) => {
  return (
    <div className="lg:text-justify space-y-4 shadow-xl py-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <div className="overflow-hidden">
        {/* Package image */}
        <img
          className="lg:w-96 lg:h-52 mx-auto rounded"
          src={pack.packageImage}
          alt={pack.packageName}
        />
      </div>
      {/* Package information */}
      <div className="px-4">
        <h1 className="text-gray-800 text-3xl font-semibold mb-4">
          {pack.packageName}
        </h1>
        <p className="lg:h-52 font-medium leading-relaxed">
          {pack.packageDesc}
        </p>
        {/* Package booking button */}
        <button
          onClick={() => handleBooking(pack._id)}
          className="flex items-center gap-3 p-3 lg:m-0 mt-4 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 transition-all"
        >
          Book Now <AiFillPushpin />
        </button>
      </div>
    </div>
  );
};

export default Package;
