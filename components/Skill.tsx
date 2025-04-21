import React from 'react'
import {motion} from "framer-motion";

type Props = {
    directionLeft?:boolean
    image:string
    level:number
}

function Skill({directionLeft,image,level}: Props) {
  console.log(image)
  return (
    <div className="group relative flex cursor-pointer">
    <motion.img
     initial={{x:directionLeft?-150:150}}
     transition={{duration:1}}
     whileInView={{x:0}}
     viewport={{once:true}}
     src={image}
     className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:h-32 xl:w-32 
     filter group-hover:grayscale transition duration-300 ease-in-out'
     />
     <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
      group-hover:bg-white h-24 w-24 rounded-full xl:h-32 xl:w-32'>
       <div className='flex items-center justify-center h-full'>
        <p className='opacity-100'>{"⭐".repeat(level)}</p>
       </div>
     </div>
    </div>
  )
}

export default Skill