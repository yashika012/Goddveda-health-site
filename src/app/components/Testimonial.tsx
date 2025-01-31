"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const MySlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full items-center justify-center">
      <Slider {...settings}>
        <div className="w-full flex items-center justify-center overflow-hidden">
          {/* First slide with 3 images stacked horizontally */}
          <div className="flex flex-row space-x-4">
            <Image
              src="/assets/images/img7.jpg"
              alt="image"
              width={600}
              height={200}
            />
            <Image
              src="/assets/images/img1.jpg"
              alt="image"
              width={600}
              height={200}
            />
            <Image
              src="/assets/images/img3.jpg"
              alt="image"
              width={600}
              height={200}
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center overflow-hidden">
          {/* Second slide */}
          <div className="flex flex-row space-x-4">
            <Image
              src="/assets/images/img1.jpg"
              alt="image"
              width={600}
              height={200}
            />
            <Image
              src="/assets/images/img3.jpg"
              alt="image"
              width={600}
              height={200}
            />
            <Image
              src="/assets/images/img8.jpg"
              alt="image"
              width={600}
              height={200}
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center overflow-hidden">
          {/* Third slide */}
          <div className="flex flex-row space-x-4">
            <Image
              src="/assets/images/img3.jpg"
              alt="image"
              width={600}
              height={200}
            />
            <Image
              src="/assets/images/img8.jpg"
              alt="image"
              width={600}
              height={200}
            />
            <Image
              src="/assets/images/img7.jpg"
              alt="image"
              width={600}
              height={200}
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center overflow-hidden">
          {/* Fourth slide */}
          <div className="flex flex-row space-x-4">
            <Image
              src="/assets/images/img8.jpg"
              alt="image"
              width={600}
              height={200}
            />
            <Image
              src="/assets/images/img1.jpg"
              alt="image"
              width={600}
              height={200}
            />
            <Image
              src="/assets/images/img3.jpg"
              alt="image"
              width={600}
              height={200}
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default MySlider;
