import React from "react";
import AboutImage from "../../assets/about-us.jpg";
import { RiSecurePaymentFill } from "react-icons/ri";
import { GiSofa } from "react-icons/gi";
import { GiPoliceBadge } from "react-icons/gi";
const AboutUs = () => {
  return (
    <div className="p-10 flex flex-col lg:flex-row justify-between">
      <div className="w-1/2">
        <img src={AboutImage} alt="About Us" />
      </div>
      <div className="w-1/2">
        <h1 className="text-3xl font-bold text-gray-800">Why Choose Us</h1>
        <div className="mt-10 space-y-8">
          <div className="flex items-center gap-8">
            <p className="text-6xl text-indigo-600">
              <RiSecurePaymentFill />
            </p>
            <p className="w-1/2 text-2xl font-semibold">
              Booking with spread payments
            </p>
          </div>
          <div className="flex items-center gap-8">
            <p className="text-6xl text-indigo-600">
              <GiSofa />
            </p>
            <p className="w-1/2 text-2xl font-semibold">
              Sleep travel in comfort
            </p>
          </div>
          <div className="flex items-center gap-8">
            <p className="text-6xl text-indigo-600">
              <GiPoliceBadge />
            </p>
            <p className="w-1/2 text-2xl font-semibold">
              Fully Licensed Tour Operator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
