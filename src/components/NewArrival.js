import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { LeftBtn, RightBtn } from "./Arrows";

function NewArrival() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: <RightBtn />,
    prevArrow: <LeftBtn />,
  };

  const wrapclass =
    "flex flex-col items-center hover:bg-gray-300 cursor-pointer ";
  return (
    <div className="my-8 w-screen max-w-screen overflow-x-hidden flex flex-col items-center bg-grayWhite py-4">
      <h1 className="ml-[10%] mb-3 w-full  font-bold text-3xl ">New Arrival</h1>
      <div className="w-11/12 my-auto">
        <Slider {...settings}>
          {Array(10)
            .fill("")
            .map((p, i) => (
              <div key={i} className={`${wrapclass}`}>
                <img src="./images/t-shirt.png" alt="" />
                <div className="ml-[30%]">
                  <p className="font-medium">705 T-shirt</p>
                  <h1 className="text-main text-xl font-bold">₹700</h1>
                </div>
              </div>
            ))}
          {Array(10)
            .fill("")
            .map((p, i) => (
              <div key={i} className={`${wrapclass}`}>
                <img src="./images/short-jeans.png" alt="" />
                <div className="ml-[30%]">
                  <p className="font-medium">Short</p>
                  <h1 className="text-main text-xl font-bold">₹2000</h1>
                </div>
              </div>
            ))}
          {Array(10)
            .fill("")
            .map((p, i) => (
              <div key={i} className={`${wrapclass}`}>
                <img src="./images/suit.png" alt="" />
                <div className="ml-[30%]">
                  <p className="font-medium">Suit</p>
                  <h1 className="text-main text-xl font-bold">₹5000</h1>
                </div>
              </div>
            ))}
          {Array(10)
            .fill("")
            .map((p, i) => (
              <div key={i} className={`${wrapclass}`}>
                <img src="./images/skirt.png" alt="" />
                <div className="ml-[30%]">
                  <p className="font-medium">Skirt</p>
                  <h1 className="text-main text-xl font-bold">₹1500</h1>
                </div>
              </div>
            ))}
          {Array(10)
            .fill("")
            .map((p, i) => (
              <div key={i} className={`${wrapclass}`}>
                <img src="./images/t-shirt.png" alt="" />
                <div className="ml-[30%]">
                  <p className="font-medium">T-shirt</p>
                  <h1 className="text-main text-xl font-bold">₹500</h1>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}

export default NewArrival;
