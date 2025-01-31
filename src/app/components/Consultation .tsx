'use client'
import React from 'react';
import Image from "next/image";

const Consultation = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-4/5 h-auto bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg flex items-center justify-between px-12 py-8 shadow-lg">
        {/* Left Side Content */}
        <div className="text-white w-1/2">
          <p className="text-lg font-semibold text-gray-900">HELP & SUPPORT</p>
          <h1 className="text-4xl font-bold mt-2 text-gray-800">Book a Consultation Session with Our Health Coach!</h1>
          <p className="mt-4 text-md">
            Book a personalized consultation session with one of our experienced health coaches today! Our dedicated team is here to provide you with expert guidance, support, and personalized recommendations to help you achieve your wellness goals.
          </p>
          <button className=" w-full mt-6 px-6 py-3 bg-gray-900 text-white font-bold text-lg rounded-3xl hover:bg-gray-400 transition-all">
            Book your Consultation Now
          </button>
        </div>

        {/* Right Side Image */}
        <div className="w-1/2 flex justify-end">
          <Image
            src="/assets/images/image91.png"
            alt="AM/PM Slimming Complex"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Consultation;
