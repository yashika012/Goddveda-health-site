import React from 'react';
import Image from "next/image"

const Uncompromising = () => {
  return (
    <div className='min-h-screen'>
      {/* Heading Section */}
      <div className='flex items-center justify-center bg-blue-300 p-8'>
        <h1 className='text-4xl sm:text-5xl font-bold text-black'>
          Uncompromising Science. Unshaken Trust
        </h1>
      </div>

      {/* Content Section with partitions */}
      <div className='bg-blue-300 p-8 flex flex-col sm:flex-row items-center justify-between text-center gap-y-6 sm:gap-x-10'>
        {/* Nutritionist recommended brand */}
        <div className='flex-1'>
          <p className='font-bold text-2xl sm:text-3xl'>No. 1</p>
          <p className='text-sm sm:text-md text-black'>Nutritionist recommended brand</p>
        </div>
        
        {/* Line partition */}
        <div className='border-t-2 sm:border-l-2 border-black h-16 sm:h-25 my-4 sm:my-0'></div>
        
        {/* Clinically Proven Ingredients */}
        <div className='flex-1'>
          <p className='font-bold text-2xl sm:text-3xl'>Clinically</p>
          <p className='text-sm sm:text-md text-black'>Proven Ingredients</p>
        </div>
        
        {/* Line partition */}
        <div className='border-t-2 sm:border-l-2 border-black h-16 sm:h-25 my-4 sm:my-0'></div>
        
        {/* Units Sold */}
        <div className='flex-1'>
          <p className='font-bold text-2xl sm:text-3xl'>50,000</p>
          <p className='text-sm sm:text-md text-black'>Units Sold</p>
        </div>

        {/* Line partition */}
        <div className='border-t-2 sm:border-l-2 border-black h-16 sm:h-25 my-4 sm:my-0'></div>
        
        {/* US FDA Licensed */}
        <div className='flex-1'>
          <p className='font-bold text-2xl sm:text-3xl'>US FDA</p>
          <p className='text-sm sm:text-md text-black'>Licensed</p>
        </div>
      </div>
      {/* Navbar Section - placed after the content */}
<nav className='bg-white py-4 flex justify-between gap-4'>
  <Image
    src="./assets/images/img19.jpg"
    alt="AM/PM Slimming Complex"
    width={180}
    height={100}
    className="rounded-lg"
  />
  <Image
    src="./assets/images/img21.jpg"
    alt="AM/PM Slimming Complex"
    width={180}
    height={100}
    className="rounded-lg"
  />
  <Image
    src="./assets/images/img17.jpg"
    alt="AM/PM Slimming Complex"
    width={180}
    height={100}
    className="rounded-lg"
  />
  <Image
    src="./assets/images/image34.avif"
    alt="AM/PM Slimming Complex"
    width={180}
    height={100}
    className="rounded-lg"
  />
  <Image
    src="./assets/images/image35.avif"
    alt="AM/PM Slimming Complex"
    width={180}
    height={100}
    className="rounded-lg"
  />
</nav>

    </div>
  );
};

export default Uncompromising;
