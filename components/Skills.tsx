"use client"
import React from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'



function Skills() {
  const skills = [
    { image: "HTML5.png", level: 4 },
    { image: "CSS3.png", level: 4 },
    { image: "js.png", level: 5 },
    { image: "react.png", level: 4 },
    { image: "Tailwind.png", level: 4 },
    { image: "Git.png", level: 4 },
    { image: "MySQL.png", level: 4 },
    { image: "node.png", level: 3 },
    { image: "C++.png", level: 4 },
    { image: "cHash.png", level: 3 },
    { image: "python.png", level: 3 },
  ];  
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.2}}
    className='relative min-h-screen flex flex-col text-center items-center justify-center max-w-[2000px] md:text-left xl:flex-row xl:px-10 xl:space-y-0 mx-auto'>
    <h3 className='absolute top-24 text-gray-500 uppercase tracking-[15px] text-2xl font-semibold '>
      Skills
    </h3>
    <div className='grid grid-cols-4 gap-5 mt-5'>
      {
        skills.map((skill,idx)=>(
          <Skill key={idx} image={skill.image} level={skill.level}/>
        ))
      }
    </div>
    </motion.div>
  )
}

export default Skills