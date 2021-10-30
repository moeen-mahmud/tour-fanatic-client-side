// Importing necessary modules
import React from "react";

// Importing Image
import AboutImage from "../../assets/about-us.jpg";

// Importing icons
import { RiSecurePaymentFill } from "react-icons/ri";
import { GiSofa } from "react-icons/gi";
import { GiPoliceBadge } from "react-icons/gi";

// Main AboutUs Component
const AboutUs = () => {
  return (
    <div className="p-10 flex flex-col lg:flex-row justify-between">
      {/* Show image */}
      <div className="lg:w-1/2">
        <img src={AboutImage} alt="About Us" />
      </div>
      {/* About Content */}
      <div className="lg:w-1/2">
        <h1 className="text-3xl font-bold text-gray-800">Why Choose Us</h1>
        <div className="mt-10 space-y-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <p className="text-6xl text-indigo-600">
              <RiSecurePaymentFill />
            </p>
            <p className="lg:w-1/2 text-center lg:text-left text-2xl font-semibold">
              Booking with spread payments
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <p className="text-6xl text-indigo-600">
              <GiSofa />
            </p>
            <p className="lg:w-1/2 text-center lg:text-left text-2xl font-semibold">
              Sleep travel in comfort
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <p className="text-6xl text-indigo-600">
              <GiPoliceBadge />
            </p>
            <p className="lg:w-1/2 text-center lg:text-left text-2xl font-semibold">
              Fully Licensed Tour Operator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
