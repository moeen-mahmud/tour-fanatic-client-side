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
      className="p-10 flex flex-col lg:flex-row justify-center"
    >
      <div className="w-1/3">
        <h1 className="text-3xl font-bold text-gray-800 mb-12">
          Discount on Quantity
        </h1>
        <p className="text-gray-800 font-medium text-lg">
          Book a tour today and enjoy exclusive savings on any future trip you
          book! There’s no time limit or expiry date on these savings
        </p>
        <img
          className="shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          src={OfferImage}
          alt="Offers"
        />
      </div>
      <div className="w-1/2">
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
