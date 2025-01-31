'use client'
import React from 'react';
import Image from 'next/image';

const Results = () => {
  return (
    <>
      {/* First Image */}
      <div className='min-h-screen relative'>
        <Image
          src="/assets/images/img10.jpg"
          alt="AM/PM Slimming Complex"
          layout='fill'
          objectFit='cover'
          objectPosition='top'
          className="absolute top-0 left-0"
          priority
        />
      </div>

      <div className='flex items-center mt-10'>
        {/* Heading next to the images */}
        <div className='flex flex-col ml-5 text-gray-600'>
  <h1 className='font-bold text-5xl mr-10 leading-relaxed '>
    Why Goodveda’s
  </h1>
  <h1 className='font-bold text-5xl leading-relaxed '>
    AM/PM Complex Stands out?
  </h1>
  <button className="  w-40 py-3 bg-black text-white rounded-3xl hover:bg-gray-800 transition-all font-bold">
              Buy Now
            </button>
</div>


        {/* Images section */}
        <div className='flex space-x-4'>
          <Image
            src="/assets/images/img19.webp"
            alt="AM/PM Slimming Complex"
            width={300}
            height={100}
            objectFit='cover'
            objectPosition='top'
            className=""
            priority
          />
          <Image
            src="/assets/images/img18.jpg"
            alt="AM/PM Slimming Complex"
            width={700}
            height={300}
            objectFit='cover'
            objectPosition='top'
            className=""
            priority
          />
       
        </div>
      </div>
    </>
  );
};

export default Results;
