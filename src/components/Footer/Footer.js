// Importing React
import React from "react";

// Importing icons
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

// Main Footer component
const Footer = () => {
  return (
    <div className="relative bottom-0 bg-indigo-700 text-white flex justify-center items-center">
      <div className="m-10">
        {/* Top Section */}
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-32 mt-4 text-center lg:text-left">
          <div className="text-center">
            {/* Call To Action Area */}
            <h1 className="font-semibold text-3xl mb-4">Tour Fanatic</h1>
            <p className="font-semibold text-xl mb-4 text-gray-400">
              Travel Solo Not Alone
            </p>
            <div className="flex items-center gap-8 justify-center">
              <p className="text-2xl cursor-pointer hover:text-indigo-400 transition-all">
                <FaFacebook />
              </p>
              <p className="text-2xl cursor-pointer hover:text-indigo-400 transition-all">
                <FaInstagram />
              </p>
              <p className="text-2xl cursor-pointer hover:text-indigo-400 transition-all  ">
                <FaTwitter />
              </p>
            </div>
          </div>
          <div>
            {/* Tour Browsing Area */}
            <h1 className="font-semibold text-2xl lg:text-3xl mb-4">Tours</h1>
            <div className="space-y-4">
              <p className="text-xl text-gray-300 cursor-pointer hover:text-white transition">
                Cox's Bazar
              </p>
              <p className="text-xl text-gray-300 cursor-pointer hover:text-white transition">
                Bandarban
              </p>
              <p className="text-xl text-gray-300 cursor-pointer hover:text-white transition">
                Saint Martin
              </p>
              <p className="text-xl text-gray-300 cursor-pointer hover:text-white transition">
                Sajek Valley
              </p>
              <p className="text-xl text-gray-300 cursor-pointer hover:text-white transition">
                Sylhet
              </p>
              <p className="text-xl text-gray-300 cursor-pointer hover:text-white transition">
                Sunderban
              </p>
            </div>
          </div>
          <div>
            {/* Support Area */}
            <h1 className="font-semibold text-2xl lg:text-3xl mb-4">Support</h1>
            <div className="space-y-4">
              <p className="text-xl text-gray-300 cursor-pointer hover:text-white transition">
                Account
              </p>
              <p className="text-xl text-gray-300 cursor-pointer hover:text-white transition">
                Legal
              </p>
              <p className="text-xl text-gray-300 cursor-pointer hover:text-white transition">
                Contact
              </p>
              <p className="text-xl text-gray-300 cursor-pointer hover:text-white transition">
                Privacy Policy
              </p>
            </div>
          </div>
          <div>
            {/* Information Area */}
            <h1 className="font-semibold text-2xl lg:text-3xl mb-4">
              Useful Pages
            </h1>
            <div className="space-y-4">
              <p className="text-xl text-gray-300 cursor-pointer hover:text-white transition">
                Deals
              </p>
              <p className="text-xl text-gray-300 cursor-pointer hover:text-white transition">
                FAQ
              </p>
              <p className="text-xl text-gray-300 cursor-pointer hover:text-white transition">
                Why us
              </p>
              <p className="text-xl text-gray-300 cursor-pointer hover:text-white transition">
                Affaliate Program
              </p>
            </div>
          </div>
        </section>
        {/* Copyright Section */}
        <section className="mt-8 text-center text-gray-400">
          <p>Copyright &copy; 2021 Tour Fanatic</p>
        </section>
      </div>
    </div>
  );
};

export default Footer;
