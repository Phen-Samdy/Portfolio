import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import React from 'react'

function ContactMe() {
  return (
    <div className='bg-[url("/main-bg.png")] h-screen bg-cover bg-center bg-fixed flex items-center'>
        <Navbar/>
        <Contact/>
    </div>
  )
}

export default ContactMe