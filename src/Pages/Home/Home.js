// Importing React
import React from "react";

// Importing home components
import AboutUs from "../../components/AboutUs/AboutUs";
import Discount from "../../components/Discount/Discount";
import Hero from "../../components/Hero/Hero";
import PackageContainer from "../../components/PackageContainer/PackageContainer";

// Main Home Component Container
const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <PackageContainer></PackageContainer>
      <AboutUs></AboutUs>
      <Discount></Discount>
    </div>
  );
};

export default Home;
