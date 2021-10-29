import React from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import Discount from "../../components/Discount/Discount";
import Hero from "../../components/Hero/Hero";
import PackageContainer from "../../components/PackageContainer/PackageContainer";

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
