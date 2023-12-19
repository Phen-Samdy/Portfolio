import React from 'react'

function Main() {
  return (
    <div className='bg-[url("/main-bg.png")] h-screen bg-cover bg-center bg-fixed flex items-center '>
        <div className='container mx-auto px-4'>
            <div className='max-w-[450px] text-white font-bold flex flex-col gap-[40px]'>
                <div className='backdrop-blur-lg'>
                    <h1 className='text-5xl text-[white]'>I'm Phen Samdy</h1>
                    <h3 className='bg-gradient-to-r from-blue-500 to-green-400 inline-block text-transparent bg-clip-text text-4xl mt-5'>
                        Front-end Developer
                    </h3>
                </div>

                <div className='bg-gradient-to-r from-blue-500 to-green-400 h-[2px] w-[300px]'></div>

                <div className='backdrop-blur-sm text-2xl'>
                    <p>Is pleased to assist clients in obtaining the goods they desire.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main