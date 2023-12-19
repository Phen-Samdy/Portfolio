import Link from "next/link";
import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = ({toggleSidebar}) => {
    return (
        <div className="bg-gradient-to-r from-green-400 to-blue-500  fixed top-0 w-[100%] z-10">
            <div className="container mx-auto flex justify-between items-center py-4 px-4">
                <div className="text-4xl font-semibold
                bg-gradient-to-r from-amber-300 to-fuchsia-600 inline-block text-transparent bg-clip-text">
                    D.SAM
                </div>

                <div className="hidden md:flex gap-6">
                    <Link href='/' className="font-medium hover:text-white">
                        HOME
                    </Link>
                    <Link href='/about-me' className="font-medium hover:text-white">
                        ABOUT
                    </Link>
                    <Link href='/skills' className="font-medium hover:text-white">
                        SKILLS
                    </Link>
                    <Link href='/contact' className="font-medium hover:text-white">
                        CONTACT
                    </Link>
                </div>
                <a href='/CV.pdf' className="hidden md:flex border px-4 py-1 shadow-blue-200 shadow-md hover:text-white ">
                    Download CV
                    <MdOutlineFileDownload className="mt-1"/>
                </a>
                <div className="md:hidden text-[24]" onClick={toggleSidebar}>
                    <MdOutlineMenu />
                </div>
            </div>
        </div>
    )
}
export default Navbar;