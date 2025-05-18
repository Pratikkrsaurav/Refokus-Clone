import { motion } from 'motion/react'
import React from 'react'
function Marquee({imagesurl, direction}) {
  return (
    <motiondiv className='flex w-full whitespace-nowrap overflow-hidden '>
      <motion.div initial={{x: direction=== 'left' ? "0" : "-100%"}} animate={{x: direction=== 'left' ? "-100%" : "0"}} transition={{ease: "linear", duration: 18, repeat:Infinity}}  className='flex flex-shrink-0 gap-40 py-10 pr-40'>{imagesurl.map((url,index)=><img key={index} className='' src={url} />)}</motion.div>
      <motion.div initial={{x: direction=== 'left' ? "0" : "-100%"}} animate={{x: direction=== 'left' ? "-100%" : "0"}} transition={{ease: "linear", duration: 18, repeat:Infinity}}  className='flex flex-shrink-0 gap-40 py-10 pr-40'>{imagesurl.map((url,index)=><img key={index} className='' src={url} />)}</motion.div>
    </motiondiv>
  )
}

export default Marquee
4