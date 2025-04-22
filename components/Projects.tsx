"use client"
import React from 'react'
import {motion} from "framer-motion";
import projects from "../public/data/projectData.json"



function Projects() {
  return (
    <div className=' relative h-screen flex flex-col justify-evenly overflow-hidden
     items-center text-center md:flex-row max-w-full z-0'>
     <h3 className=' absolute top-24 text-2xl font-semibold tracking-[15px] text-gray-500 uppercase'>
        Projects
    </h3>
    <div className=' relative  w-full flex overflow-x-scroll  overflow-y-hidden snap-x snap-mandatory z-20'>
     {projects.map((project,idx) =>(
        <div key={idx} className='w-screen flex-shrink-0 snap-center flex flex-col 
        space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
         <motion.img 
          initial={{y:-200}}
          transition={{duration:1.2}}
          whileInView={{y:0}}
          viewport={{once:true}}
             src={project.Image} className='h-60 w-90'/>
            <h4 className='font-semibold text-xl'>{project.title} </h4>
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