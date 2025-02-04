import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion';
import arqitel from '../assets/Videos/arqitel.mp4';
import ttr from '../assets/Videos/ttr.mp4';
import yir from '../assets/Videos/yir.mp4';
import yahoo from '../assets/Videos/yahoo.mp4';
import rainfall from '../assets/Videos/rainfall.mp4';
function Products() {
    const [pos, setpos] = useState(0); // For animation purpose (moving the window 20rems on mouse-move on each product).
    const mover = (index) => {    // 0*20 = 0(1st posn) : 1*20(2nd posn) : and so on...
      setpos(index*20); 
    }

    const Products = [
        {
          name: "Arquitel",
          description:
            "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
          case: true,
          website: true,
          hover: "hover:bg-violet-500",
        },
        {
          name: "TTR",
          description:
            "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
          case: false,
          website: true,
          hover: "hover:bg-teal-500",
        },
        {
          name: "YIR 2022",
          description:
            "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
          case: true,
          website: false,
          hover: "hover:bg-green-500",
        },
        {
          name: "Yahoo!",
          description:
            "We enhanced the New York Fashion Week, by creating a fully digital AR fashion featuring holographic 3D models, an integrated web shop.",
          case: true,
          website: true,
          hover: "hover:bg-blue-500",
        },
        {
          name: "Rainfall",
          description:
            "We crafted a website for Rainfall Ventures, custom code that ultimately allows their team to update content regularly and with ease.",
          case: true,
          website: true,
          hover: "hover:bg-orange-500",
        },
      ];
  return (
    <div className='mt-36 lg:mt-28 relative'>
        {Products.map((p, index) => <Product  val={p} key={index} index={index} mover={mover}/>)}
        <div className='w-full h-full absolute top-0 pointer-events-none md:flex hidden'>
          <motion.div initial={{y: pos, x: "-50%"}} animate={{y:pos + `rem`}} transition={{ ease:  [0.22, 1, 0.36, 1], duration: 0.5 }}  className='w-[24rem] h-[20rem] absolute left-[46%] overflow-hidden'>
            <motion.div animate={{y: -pos + `rem`}} transition={{ ease:  [0.22, 1, 0.36, 1], duration: 0.5 }} className='w-full h-full'>
            <video
              className="border-[3px] border-violet-200 h-[100%] w-full absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={arqitel}
            ></video>
            </motion.div>
            <motion.div animate={{y: -pos + `rem`}} transition={{ ease:  [0.22, 1, 0.36, 1], duration: 0.5 }} className='w-full h-full'>
            <video
              className="border-[3px] border-violet-200 h-[100%] w-full absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={ttr}
            ></video>
            </motion.div>
            <motion.div animate={{y: -pos + `rem`}} transition={{ ease:  [0.22, 1, 0.36, 1], duration: 0.5 }} className='w-full h-full'>
            <video
              className="border-[3px] border-violet-200 h-[100%] w-full absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={yir}
            ></video>
            </motion.div>
            <motion.div animate={{y: -pos + `rem`}} transition={{ ease:  [0.22, 1, 0.36, 1], duration: 0.5 }} className='w-full h-full'>
            <video
              className="border-[3px] border-violet-200 h-[100%] w-full absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={yahoo}
            ></video>
            </motion.div>
            <motion.div animate={{y: -pos + `rem`}} transition={{ ease:  [0.22, 1, 0.36, 1], duration: 0.5 }} className='w-full h-full'>
            <video
              className="border-[3px] border-violet-200 h-[100%] w-full absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={rainfall}
            ></video>
            </motion.div>
          </motion.div>
        </div>
    </div>
  )
}

export default Products