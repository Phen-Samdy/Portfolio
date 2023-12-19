'use client'

import Main from '@/components/Main'
import Navbar from '@/components/Navbar'
import SideBar from '@/components/SideBar'
import { useState } from 'react'


export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <header>
        <Navbar toggleSidebar={toggleSidebar}/>
      </header>
      <main>
        <SideBar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        <Main/>
      </main>
    </div>
  )
}
