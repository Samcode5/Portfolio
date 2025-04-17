import React from 'react'
import {motion} from "framer-motion"
import { once } from 'events'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] 
     md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden snap-center'>
        <motion.img src='/zensar.jpg'
        initial={{y:-100,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:1}}
        viewport={{once:true}}
        className="w-32 h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center" alt="experience image"/>
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light '>Software Developer</h4>
        <p className='font-bold text-2xl mt-1'>Zensar</p>
        <div className='flex space-x-2 my-2'>
            <img src="/js.png" className='w-[32px] h-[32px]'/>
            <img src="/js.png" className='w-[32px] h-[32px]'/>
            <img src="/js.png" className='w-[32px] h-[32px]'/>
        </div>
        <p className='uppercase py-5 text-gray-300'>Started work...ended</p>
        <ul className='list-disc space-y-2 text-lg'>
            <li>points points points points pointspointspointspointspoints points</li>
            <li>points points points points pointspoints pointspoints points </li>
            <li>points points points pointspoints points points points </li>
        </ul>
      </div>
    </article>
  )
}

