import React from 'react'
import { IoMenu } from "react-icons/io5";
import Image from 'next/image';
import goodveda from '../../../public/assets/images/goodveda.svg'
import { LuCircleUserRound } from "react-icons/lu";
import { IoIosLock } from "react-icons/io";



const Navbar = () => {
  return (
    <nav className='h-full min-h-[15vh] bg-purple-50 flex items-center justify-around md:text-5xl sm:text-3xl text-2xl text-gray-600 '>
      <div className='flex font-bold font-sans gap-3'>
        <IoMenu />
        <h1 >MENU</h1>
      </div>
      <div className='md:w-[400px] sm:w-[300px] w-[100px]'>
        <Image src={goodveda} alt='goodveda' width={400} height={50}/>
      </div>

      <div className='flex gap-3'>
        <LuCircleUserRound/>
        <IoIosLock/>
      </div>
    </nav>
  )
}

export default Navbar