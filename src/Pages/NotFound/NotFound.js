// Importing React
import React from "react";

// Main Not Found Component
const NotFound = () => {
  return (
    <div className="p-10 flex justify-center">
      <div className="text-center">
        <h1 className="text-8xl text-indigo-600 font-bold mb-4">404</h1>
        <p className="text-4xl font-bold text-gray-800 mb-8">Page not found!</p>
        <p className="text-xl font-semibold text-gray-500">
          Let me guess, you did something with the url... 🤔
        </p>
      </div>
    </div>
  );
};

export default NotFound;
