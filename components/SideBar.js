import Link from 'next/link';
import React from 'react'
import { RiCloseFill } from "react-icons/ri";

function SideBar({isOpen, toggleSidebar}) {
  return (
    <div className={`w-screen h-screen ${isOpen ? "fixed":"hidden"}
    top-0 left-0 bg-gradient-to-r from-blue-500 to-green-400 z-20 text-white grid place-items-center`}>
        <div className='absolute top-0 right-0 mr-[30px] mt-[10px] text-[24px]
        hover:cursor-pointer' onClick={toggleSidebar}>
            <RiCloseFill />
        </div>
        <div className='flex flex-col gap-4 text-[28px]'>
            <Link className='hover:text-white' href="/">Home</Link>
            <Link className='hover:text-white' href="/about">About</Link>
            <Link className='hover:text-white' href="/skills">Skills</Link>
            <Link className='hover:text-white' href="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default SideBar