import React from 'react'
import Button from './button'
import { motion } from 'framer-motion'
function Navbar() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -30 }} 
      animate={{ opacity: 1, y: 0 }}    
      transition={{ duration: 0.6, ease: "easeOut" }} 
      className='max-w-screen-lg mx-auto px-4 py-5 flex item-center justify-between border-b-[1px] border-zinc-700'>
        <div className='left flex items-center'>
            <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt=""/>
            <div className='links flex gap-14 ml-20'>
                {["Home", "Work", "Culture", "", "News"].map((elem, index) => <a key={index} href='#' className='font-regular text-sm flex items-center gap-1'>
                    {elem.length === 0 && (<span className='w-[2px] h-6 bg-zinc-600'></span>)} 
                    {index === 1 && (<span  style={{ boxShadow: "0.2em 0.2em 1em #00FF19, 0 0 1.5em #00FF19" }} className='inline-block w-1 h-1 bg-green-500 rounded-full'></span>)}
                    {elem}</a>)}
            </div>
        </div>
        <Button />
    </motion.div>
  )
}

export default Navbar