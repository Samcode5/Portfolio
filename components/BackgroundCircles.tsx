import React from 'react'
import { motion } from "framer-motion";



function BackgroundCircles() {
  return (
    <motion.div
     initial={{opacity:0,scale:0}}
     animate={{opacity:[0.1,0.3,0.7,1],scale:1}}
     transition={{duration:2.5}}
    className='relative flex justify-center items-center mt-30'>
    <div className="absolute border border-[#333333]  rounded-full h-[300px] w-[300px]  animate-pulse mt-52"></div>
    <div className="absolute border border-[#333333] rounded-full h-[400px] w-[400px]  animate-pulse mt-52"></div>
    <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px]  animate-pulse mt-52"></div>
    <div className="absolute border rounded-full h-[650px] w-[650px] animate-pulse mt-52"></div>
    </motion.div>
  )
}

export default BackgroundCircles