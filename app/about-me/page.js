import React from 'react'
import About from '@/components/About'
import Navbar from '@/components/Navbar'

function AboutMe() {
  return (
    <div className='bg-[url("/main-bg.png")] h-screen bg-cover bg-center bg-fixed flex items-center'>
        <Navbar/>
        <About/>
    </div>
  )
}

export default AboutMe