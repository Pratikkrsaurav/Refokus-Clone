import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";

function Button() {
  return (
    <div className='min-w-35 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between'>
        <span className='text-sm '>Get Started</span>
        <BsArrowReturnRight/> 
      
    </div>
  )
}

export default Button
