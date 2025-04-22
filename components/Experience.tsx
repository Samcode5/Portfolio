"use client"
import React from 'react'
import ExperienceCard from './ExperienceCard'
import experienceData from "../public/data/expData.json"


type Props = {}

function Experience({}: Props) {
  return (
    <div className='relative h-screen flex flex-col justify-evenly items-center overflow-hidden text-left md:flex-row max-w-full px-10 py-10'>
        <h1 className='absolute top-24 uppercase text-gray-500 tracking-[15px]  font-semibold text-2xl '>
            Experience
        </h1>
        <div className='w-full flex space-x-5 overflow-x-scroll p-8 snap-x snap-mandatory mt-32 md:mt-40 xl:mt-52 '>
          {
            experienceData.map((data,id)=>(
              <ExperienceCard key={id} {...data}/>
            ))

          }
        </div>
    </div>
  )
}

export default Experience