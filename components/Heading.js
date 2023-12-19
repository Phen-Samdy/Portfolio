import React from 'react'

function Heading({title}) {
  return (
    <div className='bg-gradient-to-r from-blue-500 to-green-400 inline-block text-transparent bg-clip-text text-4xl font-bold flex items-center gap-4 py-16 backdrop-blur-sm'>
        {title}
        <div className='bg-gradient-to-r from-blue-500 to-green-400 h-[4px] w-[40px] translate-y-1'></div>
    </div>
  )
}

export default Heading