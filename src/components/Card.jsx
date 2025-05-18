import { motion } from 'motion/react';
import React from 'react'
import { GoArrowRight } from "react-icons/go";

function Card({width, start, para, hover="false"}) {
  return (
    <motion.div whileHover={{backgroundColor: hover==="true" && "#7443ff", padding:"25px" }}  className={` bg-zinc-800 p-5 rounded-xl  ${width} min-h-[28rem] flex flex-col justify-between`}>
      <div className='w-full'>
          <div className='w-full flex justify-between items-center'>
            <h3>one heading</h3>
            <GoArrowRight />
        </div>
        <div>
            <h1 className='text-3xl font-medium mt-8'>whatever heading</h1></div>
    </div>
    <div className='down w-full'>
        {
            start && (<> <h1 className='text-6xl uppercase font-semibold tracking-tight leading-none whitespace-nowrap'>start a project</h1>
        <button className='rounded-full py-2 px-5 border-1 border-zinc-50 mt-5'>contact us</button>
         </>) 
        }
        {
            para && (<p className='text-sm text-zinc-500 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>)
        }
       
    </div>
      </motion.div>
  )
}

export default Card
