import React from 'react'
import Heading from './Heading'
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaPhp } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiJquery } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

function Skills() {
  return (
    <section className='container mx-auto py-10 px-4 h-screen'>
        <Heading title='SKILLS'/>
        <div className='flex flex-wrap mx-10 mr-200 justify-center'>
            <div className='border-4 rounded-md  shadow-black shadow-lg backdrop-blur-md m-3'>
                <FaHtml5 size={"5rem"} color='#f97316' style={{"margin":"50px"}}/>
            </div>
            <div className='border-4 rounded-md shadow-black shadow-lg backdrop-blur-md m-3'>
                <FaCss3Alt size={"5rem"} color='blue' style={{"margin":"50px"}}/>
            </div>
            <div className='border-4 rounded-md shadow-black shadow-lg backdrop-blur-md m-3'>
                <FaBootstrap size={"5rem"} color='#9333ea' style={{"margin":"50px"}}/>
            </div>
            <div className='border-4 rounded-md shadow-black shadow-lg backdrop-blur-md m-3'>
                <SiTailwindcss size={"5rem"} color='#38bdf8' style={{"margin":"50px"}}/>
            </div>
            <div className='border-4 rounded-md shadow-black shadow-lg backdrop-blur-md m-3'>
            <IoLogoJavascript size={"5rem"} color='yellow' style={{"margin":"50px"}}/>
            </div>
            <div className='border-4 rounded-md shadow-black shadow-lg backdrop-blur-md m-3'>
            <SiJquery size={"5rem"} color='blue' style={{"margin":"50px"}}/>
            </div>
            <div className='border-4 rounded-md shadow-black shadow-lg backdrop-blur-md m-3'>
            <FaReact size={"5rem"} color='#22d3ee' style={{"margin":"50px"}}/>
            </div>
            <div className='border-4 rounded-md shadow-black shadow-lg backdrop-blur-md m-3'>
            <TbBrandNextjs size={"5rem"} color='black' style={{"margin":"50px"}}/>
            </div>
          <div className='border-4 rounded-md shadow-black shadow-lg backdrop-blur-md m-3'>
          <FaPhp size={"5rem"} color='purple' style={{"margin":"50px"}}/>
          </div>
        </div>
    </section>
  )
}

export default Skills