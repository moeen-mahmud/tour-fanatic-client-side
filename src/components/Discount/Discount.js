import React from "react";
import DiscountBG from "../../assets/discount-bg.svg";
import DiscountImage from "../../assets/discount.png";
import OfferImage from "../../assets/offer-img.png";

const Discount = () => {
  return (
    <div
      style={{
        backgroundImage: `url("${DiscountBG}")`,
        height: "80vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="my-32 lg:m-0 p-10 flex flex-col lg:flex-row justify-center lg:gap-0 gap-10"
    >
      <div className="lg:w-1/3">
        <h1 className="lg:text-left text-center text-3xl font-bold text-gray-800 mb-12">
          Discount on Quantity
        </h1>
        <p className="text-gray-800 font-medium text-lg mb-4 lg:m-0">
          Book a tour today and enjoy exclusive savings on any future trip you
          book! There’s no time limit or expiry date on these savings
        </p>
        <img
          className="shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 mx-auto lg:m-0"
          src={OfferImage}
          alt="Offers"
        />
      </div>
      <div className="lg:w-1/2">
        <img
          className="block mx-auto w-1/2"
          src={DiscountImage}
          alt="Discount"
        />
      </div>
    </div>
  );
};

export default Discount;
