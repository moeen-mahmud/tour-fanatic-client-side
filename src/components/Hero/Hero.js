import React from "react";
import HeroImage from "../../assets/hero-bg.png";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url("${HeroImage}")`,
        height: "70vh",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="flex justify-center"
    >
      <div className="pt-20 text-center">
        <h3 className="text-gray-300 italic text-lg mb-3">
          Walk your own path and be yourself
        </h3>
        <h1 className="text-white font-bold text-5xl lg:text-7xl mb-4">
          Travel <span className="text-indigo-600">Solo</span>
        </h1>
        <p className="text-gray-200 font-semibold text-justify lg:text-center lg:text-xl px-4 lg:p-0">
          Going in a group is a great way for solo travelers to see the world.
          <br />
          Enjoy the ease of having all the details handled, and the peace
          <br />
          of mind knowing we're there for you wherever you go.
        </p>
      </div>
    </div>
  );
};

export default Hero;
