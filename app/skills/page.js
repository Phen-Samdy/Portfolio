import React from 'react'
import Skills from '@/components/Skills'
import Navbar from '@/components/Navbar'


function Skill() {
  return (
    <div className='bg-[url("/main-bg.png")] h-fit bg-auto bg-center  items-center md:h-full'>
        <Navbar/>
        <Skills/>
    </div>
  )
}

export default Skill