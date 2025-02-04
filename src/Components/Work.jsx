import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
function Work() {
    const [data, setData]= useState([
        {img:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png", left:"50%",top:"50%" , isActive:false},
        {img:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png", left:"43%",top:"55%" , isActive:false},
        {img:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png", left:"52%",top:"58%" , isActive:false},
        {img:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png", left:"44%",top:"63%" , isActive:false},
        {img:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png", left:"50%",top:"66%" , isActive:false},
        {img:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png" ,left:"55%",top:"72%" , isActive:false},
    ]);

    const {scrollYProgress} = useScroll();  // scrollY gives points like kitna scroll hua h, while progress varies from 0 to 1 from page start to end.
    
    scrollYProgress.on("change", (scrollpnts) => {
        function showImages(arr){    // Takes array of indices of images to be shown.
            setData((prevData) => {
                return prevData.map((obj, i) =>    // In the next line, we check if current obj's index is in arr or not.
                    arr.indexOf(i + 1) === -1 ? ({...obj, isActive: false}) : ({...obj, isActive: true})
                )
            })
        };

        switch(Math.floor(scrollpnts*100)){
            case 0: 
                showImages([]);
                break;
            case 1:
                showImages([1]);
                break;
            case 2:
                showImages([1, 2]);
                break;
            case 3:
                showImages([1, 2, 3]);
                break;
            case 4:
                showImages([1, 2, 3, 4]);
                break;
            case 5:
                showImages([1, 2, 3, 4, 5]);
                break;
            case 6:
                showImages([1, 2, 3, 4, 5, 6]);
                break;
        }
    });
  
  return (
    <motion.div className='w-full' 
      initial={{ opacity: 0, y: 100 }} 
      animate={{ opacity: 1, y: 0 }}    
      transition={{ duration: 0.6, ease: "easeOut" }} >
        <div className='mx-auto max-w-screen-lg text-center mt-16 mb-24'>
            <h1 className='text-[30vw] leading-none tracking-tight font-medium select-none'>work</h1>
        </div>
        <div className=' top-0'>
            {data.map((elem,index)=>(
                elem.isActive && <img key={index} className='absolute w-44 lg:w-56 rounded-xl -translate-x-[50%] -translate-y-[50%]' style={{top:elem.top,left:elem.left}} src={elem.img}></img> 
            ))}
        </div>
    </motion.div>
  )
}

export default Work