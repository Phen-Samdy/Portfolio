import React from 'react'
import Heading from './Heading'

function About() {
  return (
    <section className='container h-screen mx-auto py-20 px-4 backdrop-blur-2xl '>
        <Heading title="ABOUT ME"/>

        <div className='grid gap-[60px]'>
            <div className='flex items-center justify-between'>
                <div className='flex flex-col gap-6'>
                    <div className='flex gap-4 justify-center leading-10'>
                        <div className='text-red-700 font-bold text-[20px]'>
                            <h1>University</h1>
                            <h1>Major</h1>
                            <h1>Year</h1>
                            <h1>Address</h1>
                        </div>
                        <div>
                            <p>:</p>
                            <p>:</p>
                            <p>:</p>
                            <p>:</p>
                        </div>
                        <div className='text-[20px] text-purple-700'>
                            <p>Royal University of Phnom Penh</p>
                            <p>Computer Science</p>
                            <p>2019 to 2023</p>
                            <p>Toul Kork, Phnom Penh</p>
                        </div>
                    </div>
                    <div className='justify-center'>
                        <h1 className='font-bold text-[32px] text-[white] mt-16 mb-10'>I'm Phen Samdy and a frontend developer.</h1>
                        <p className='text-[22px] text-[white] leading-10'>I am a fresh graduate student. 
                            I am a friendly, open-minded, and hard worker. I also take responsibility 
                            seriously. I therefore always respond to my work. Additionally, I enjoy lending a 
                            hand to those in need. I have soft skills like  teamwork, collaboration, problem 
                            solving and communication. My technical knowledges include HTML, CSS, Boostrap, 
                            Tailwindcss, JavaScript, JQuery, ReactJS, PHP, and MySQL.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About