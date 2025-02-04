import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
function Card({width, start, para, dataIndex}) {
    const data = [
        {toptitle: "Up Next: Culture", heading: "Who we are"},
        {toptitle: "Get In Touch", heading: <>Let's get to it.<br/>together.</>}
    ];
  return (
    <motion.div whileHover={{padding: "25px"}} className= {`${width} hover:bg-purple-600 bg-zinc-800 rounded-xl p-4 min-h-[23rem] flex flex-col justify-between`}>
        <div>
            <div className='flex w-full items-center justify-between'>
                <h5 className='font-medium text-sm text-zinc-400'>{data[dataIndex].toptitle}</h5>
                <FaArrowRightLong />
            </div>
            <h1 className='text-3xl font-medium mt-5'>{data[dataIndex].heading}</h1>
        </div>
        <div className='down w-full'>
            {start && 
                (<>
                <h1 className='text-8xl font-semibold tracking-tighter leading-none'>Start a Project</h1>
                <button className='px-4 py-[6px] mt-5 font-light rounded-full border-[1px] border-zinc'>Contact Us</button>
                </>)}
            {para && <p className='text-sm text-zinc-400 font-medium '>Our Work, Your Choice :)</p>}
        </div>
    </motion.div>
  )
}

export default Card