import React from 'react'

const Jumbutron = ({ children }) => {
  return (
    <div className="banner bg-gray-800 flex items-center py-20">
      <div className='max-w-md mx-auto w-full'>
        <h1 className='text-white text-center text-2xl font-bold mb-5' style={{fontFamily:"Lobster",fontSize:"35px"}}>Image Gallery</h1>
        {children}
      </div>
    </div>
  )
}

export default Jumbutron