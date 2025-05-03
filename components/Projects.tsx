"use client"
import React, { useRef, useState } from 'react'
import {motion} from "framer-motion";
import projects from "../public/data/projectData.json"
import { SocialIcon } from 'react-social-icons';
import { ArrowRightIcon } from '@heroicons/react/16/solid';
import { ArrowLeftIcon } from '@heroicons/react/16/solid';



function Projects() {
  const [activeIndex,setActiveIndex]=useState(0);
  const scrollRef=useRef(null);

  const handleScroll =()=>{
    const scrollX=scrollRef.current?.scrollLeft;
    const width = scrollRef.current?.offsetWidth;
    const newIndex = Math.round(scrollX / width);
    setActiveIndex(newIndex);
  }



  return (
    <div className='relative h-screen flex flex-col justify-evenly overflow-hidden
     items-center text-center md:flex-row max-w-full z-0'>
      <div className='absolute top-24 flex items-center gap-4'>
     <h3 className='text-2xl font-semibold tracking-[15px] text-gray-500 uppercase'>
        Projects
    </h3>
    {activeIndex === projects.length - 1 ? (
          <button className='cursor-pointer p-4 bg-transparent border-none' >
            <ArrowLeftIcon className='h-10 w-10 text-gray-500'/>
          </button>
        ) : (
         <button className='hover:cursor-pointer z-10' >
          <ArrowRightIcon className='h-10 w-10 text-gray-500' />
          </button>
        )}
    </div>
    <div 
    ref={scrollRef}
    onScroll={handleScroll}
    className=' relative  w-full flex overflow-x-scroll  overflow-y-hidden snap-x snap-mandatory z-20'>
     {projects.map((project,idx) =>(
        <div key={idx} className='w-screen flex-shrink-0 snap-center flex flex-col 
        space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
         <motion.img 
          initial={{y:-200}}
          transition={{duration:1.2}}
          whileInView={{y:0}}
          viewport={{once:true}}
          src={project.Image} className='md:h-60 md:w-90 h-30 w-45'/>
           <div className='flex flex-row gap-1 items-center'>
            <h4 className='font-semibold text-xl'>{project.title} </h4>
            {project.github && (
             <motion.div 
              initial={{y:-200}}
              animate={{y: 0}}
              transition={{duration:1.2}}
             className="z-1 ">
             <SocialIcon 
             url={project.github}
             className="h-4 w-4"
             />
            </motion.div>
            )}
            </div>
             <ul className='list-disc space-y-2 text-left'>
               {project.details.map((data,idx)=>(
                   <li key={idx}>{data}</li>
               ))}               
             </ul>
        </div>

     ))}
    </div>
    <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
     </div>
  )

  
}

export default Projects