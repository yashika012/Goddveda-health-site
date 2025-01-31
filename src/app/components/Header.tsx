"use client";
import { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen flex items-center justify-center mt-10  sm:px-8">
      {/* Product Image and Details */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 bg-white rounded-lg shadow-lg w-full max-w-screen-lg">
        {/* Image Section */}
        <div className="flex justify-center items-center w-full md:w-1/2">
          <div className="relative">
            {/* Main Product Image */}
            <Image
              src="/assets/images/ketogen.webp"
              alt="AM/PM Slimming Complex"
              width={450}
              height={200}
              className="rounded-lg"
            />
            {/* Additional Image (img4) below the main image */}
            <div className="mt-4">
              <Image
                src="/assets/images/img4.jpg"
                alt="Enhances Your Metabolism"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="w-full md:w-1/2 max-w-lg">
          {/* Heading Section */}
          <div className="flex flex-col justify-start">
            <h1 className="text-3xl tracking-wide font-bold text-gray-700 mt-7">
              Goodveda AM/PM Slimming Complex - Your 24-Hour Weight Loss
              Solution
            </h1>
            <div className="flex text-xl mt-2">
              {[...Array(4)].map((_, index) => (
                <FaStar key={index} />
              ))}
              <CiStar className="text-xl" />
            </div>
          </div>

          {/* Description Section */}
          <p className="text-md text-gray-600 mt-2 mb-2">
            Transform your weight loss journey with Goodveda AM/PM Slimming
            Complex
          </p>
          <p className="text-md text-gray-600">
            Improve metabolism, burn fat, control cravings, and improve sleep—
            all naturally with our Ayurvedic-inspired dual-action formula.
          </p>

          {/* Image Grid (3 per row, responsive) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <Image
                src="/assets/images/img28.webp"
                alt="Suppresses Appetite"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <span className="w-1/2">Suppresses Appetite</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/assets/images/img29.webp"
                alt="Enhances Your Metabolism"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <span className="ml-4">Enhances Your Metabolism</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/assets/images/img30.webp"
                alt="Increase Energy Levels"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <span className="ml-4">Helps in Increase Energy Levels</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/assets/images/img31.webp"
                alt="Supports Fat Burning"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <span className="w-1/2">Supports Fat Burning</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/assets/images/img32.webp"
                alt="Improves Sleep Quality"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <span className="ml-4">Improves Sleep Quality</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/assets/images/img33.webp"
                alt="Reduces Late-Night Cravings"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <span>Reduces Late-Night Cravings</span>
            </div>
          </div>

          {/* Pack Options Section */}
          <h1 className="text-2xl font-bold mt-5 mb-4">Pack</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Box 1 */}
            <div className="flex flex-col items-center justify-center p-5 border border-gray-300 rounded-lg shadow-md bg-blue-100">
              <h3 className="text-sm font-bold">Buy 1 Get 1 Free</h3>
              <p className="text-lg font-bold text-gray-800">₹1999</p>
              <p className="text-sm font-bold line-through text-gray-500">
                ₹3999
              </p>
              <p className="text-xs font-bold text-gray-500">
                Incl. of all taxes
              </p>
            </div>

            {/* Box 2 */}
            <div className="flex flex-col items-center justify-center p-5 border border-gray-300 rounded-lg shadow-md bg-red-100">
              <h3 className="text-sm font-bold">Buy 1 Get 1 Free</h3>
              <p className="text-lg font-bold text-gray-800">₹3499</p>
              <p className="text-sm font-bold line-through text-gray-500">
                ₹7000
              </p>
              <p className="text-xs font-bold text-gray-500">
                Incl. of all taxes
              </p>
            </div>

            {/* Box 3 */}
            <div className="flex flex-col items-center justify-center p-5 border border-gray-300 rounded-lg shadow-md bg-green-100">
              <h3 className="text-sm font-bold">Buy 1 Get 1 Free</h3>
              <p className="text-lg font-bold text-gray-800">₹4999</p>
              <p className="text-sm font-bold line-through text-gray-500">
                ₹11007
              </p>
              <p className="text-xs font-bold text-gray-500">
                Incl. of all taxes
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 mt-12">
            {/* Add to Cart Button */}
            <button className="w-full px-6 py-3 bg-black text-white rounded-3xl hover:bg-gray-700 transition-all font-bold">
              Add to Cart
            </button>

            {/* Buy Now Button */}
            <button className="w-full px-6 py-3 bg-black text-white rounded-3xl hover:bg-green-700 transition-all font-bold">
              Buy Now
            </button>
          </div>

          <div className="bg-gray-100 underline-black p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-8">
            <p className="text-lg font-semibold text-gray-800">
              Save an{" "}
              <span className="text-blue-500 font-bold">additional 10%</span> on
              all prepaid purchases.
            </p>
            <p className="text-lg font-semibold text-gray-800 mt-2">
              Use <span className="text-blue-500 font-bold">SAVE500</span> for
              ₹500 OFF on orders of ₹5000 and above!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
