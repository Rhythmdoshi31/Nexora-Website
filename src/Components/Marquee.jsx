import React from 'react'
import {motion} from 'framer-motion';

function Marquee({imagesurl, direction}) {
  return (
    <div className='flex w-full gap-10 lg:gap-20 overflow-hidden'>
        <motion.div initial={{x: direction === "left" ?"0": "-100%"}} animate={{x: direction==="left" ? "-100%" : "0"}} transition={{ease:"linear" , duration:12,repeat: Infinity}} className='flex gap-10 lg:gap-40 flex-shrink-0 py-4 lg:py-8 lg:pr-40'>
        {imagesurl.map((img,index)=>  <img key={index} className='flex-shrink-0 lg:w-fit' src={img} alt="" /> )}
        </motion.div>
        
        <motion.div initial={{x: direction === "left" ?"0": "-100%"}} animate={{x: direction==="left" ? "-100%" : "0"}} transition={{ease:"linear" , duration:12,repeat: Infinity}} className='flex gap-10 lg:gap-40 flex-shrink-0 py-4 lg:py-8 lg:pr-40'>
        {imagesurl.map((img,index)=>  <img key={index} className='flex-shrink-0 lg:w-fit' src={img} alt="" /> )}
        </motion.div>
    </div>
  )
}

export default Marquee