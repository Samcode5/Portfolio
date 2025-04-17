"use client"
import React from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'

type Props = {}

function Skills({}: Props) {
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
      <Skill/>
      <Skill/>
      <Skill/>
      <Skill/>
      <Skill/>
      <Skill/>
      <Skill/>
      <Skill/>
      <Skill/>
    </div>
    </motion.div>
  )
}

export default Skills