"use client"
import React from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'



function Skills() {
  const skills = [
    { image: "HTML5.png", level: 4 ,directionLeft:true},
    { image: "CSS3.png", level: 4,directionLeft:true},
    { image: "js.png", level: 5,directionLeft:false },
    { image: "react.png", level: 4 ,directionLeft:false},
    { image: "Tailwind.png", level: 4 ,directionLeft:true},
    { image: "Git.png", level: 4 ,directionLeft:true},
    { image: "MySQL.png", level: 4 ,directionLeft:false},
    { image: "node.png", level: 3,directionLeft:false },
    { image: "C++.png", level: 4 ,directionLeft:true},
    { image: "cHash.png", level: 3 ,directionLeft:true},
    { image: "python.png", level: 3 ,directionLeft:false},
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
          <Skill key={idx} image={skill.image} level={skill.level} directionLeft={skill.directionLeft}/>
        ))
      }
    </div>
    </motion.div>
  )
}

export default Skills