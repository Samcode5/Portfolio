'use client'
import React from 'react'
import {motion} from "framer-motion";
type Props = {}

function About({}: Props) {
  return (
    <div className='relative h-screen flex flex-col items-center justify-evenly text-center md:text-left md:flex-row px-10 mx-auto max-w-7xl my-40'>
        <h1 className='absolute top-24 uppercase text-gray-500 tracking-[15px]  font-semibold text-2xl'>
            About
        </h1>
        <motion.img
         initial={{x:-200}}
         transition={{duration:1}}
         whileInView={{x:0}}
         whileHover={{scale:1.02}}
         viewport={{once:true}}
        src="/me_goa.jpg" alt="about img" className='h-40 w-40 rounded-full  mx-2 mt-35 flex-shrink-0 md:h-95 md:w-85 md:rounded-xl md:mt-15'/>
        <div className='max-w-7xl m-2 md:mt-25'>
            <p className='text-md tracking-wide'>
            Hey there, I’m Gautam Mudawadkar!
            A software developer with a knack for problem-solving and a passion for crafting innovative solutions. 
            I graduated with a Computer Science degree from VIT Pune, and ever since, I’ve been on a mission to push my limits, learn new technologies, and refine my skills.
            I firmly believe that tough challenges aren’t obstacles—they're just plot twists in the story of growth. Whether it’s debugging code or figuring out the fastest way to chase down a cricket ball, I thrive on solving problems.
            Outside the world of tech, I’m an athlete, a die-hard cricket fan, and a theatre enthusiast who enjoys the drama both on and off the screen. 
            If I’m not coding, you’ll probably find me on the field, at the movies, or figuring out how to make everyday life just a little more cinematic 
            </p>
        </div>
    </div>
  )
}

export default About