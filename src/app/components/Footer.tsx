import React from "react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="w-full min-h-[80vh] flex flex-col bg-black text-white items-center justify-center gap-10 px-5">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="flex flex-col w-full max-w-xs gap-5">
          <Image
            src="/assets/images/footer-logo.avif"
            alt="logo"
            width={300}
            height={400}
          />
          <p className="text-sm">
            Discover the power of Ayurveda to support diabetes management,
            promote healthy weight, and enhance heart wellness. At Goodveda, we
            offer natural supplements designed to aid in managing chronic
            conditions and support your journey toward a healthier lifestyle.
          </p>
          <div className="flex items-center gap-5 text-2xl">
            <FaFacebook />
            <FaInstagram />
            <IoLogoYoutube />
          </div>
        </div>

        <ul className="flex flex-col w-full max-w-xs list-none gap-5 text-xl">
          <li className="hover:text-gray-400">About us</li>
          <li className="hover:text-gray-400">Diabetes Reversal</li>
          <li className="hover:text-gray-400">Obesity Reversal</li>
          <li className="hover:text-gray-400">Blog</li>
          <li className="hover:text-gray-400">Why Goodveda?</li>
        </ul>

        <ul className="flex flex-col w-full max-w-xs list-none gap-5 text-xl">
          <li className="hover:text-gray-400">Track Order</li>
          <li className="hover:text-gray-400">Terms of service</li>
          <li className="hover:text-gray-400">Refund Policy</li>
          <li className="hover:text-gray-400">Privacy Policy</li>
          <li className="hover:text-gray-400">ISO 9001:2015 Certificate</li>
          <li className="hover:text-gray-400">HACCP Certificate</li>
          <li className="hover:text-gray-400">GMP Certificate</li>
          <li className="hover:text-gray-400">FSSAI Certificate</li>
        </ul>

        <ul className="flex flex-col w-full max-w-xs list-none gap-5 text-xl">
          <li className="hover:text-gray-400">care@goodveda.com</li>
          <li className="hover:text-gray-400">+91 9990 085 533</li>
          <li className="hover:text-gray-400">
            India Office: Suit 106, H-32, Sector 63, Noida, (U.P) 201301
          </li>
          <li className="hover:text-gray-400">
            US Office: 447 Broadway, 2nd Floor Suite #1445, New York, 10013, USA
          </li>
        </ul>
      </div>
      <p className="text-xl text-gray-600 text-center">
        All rights reserved © Goodveda 2024
      </p>
    </footer>
  );
};

export default Footer;
