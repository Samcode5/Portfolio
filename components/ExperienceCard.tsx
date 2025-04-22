import React from 'react'
import {motion} from "framer-motion"


type Props = {
  title: string
  company: string
  tech: string[]
  date: string
  details: string[]
  companyImage: string
}

export default function ExperienceCard({ title,
  company,
  tech,
  date,
  details,
  companyImage}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 max-w-screen
     md:w-[600px] xl:w-[900px] xl:h-auto snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200'>
        <motion.img src={companyImage}
        initial={{y:-100,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:1}}
        viewport={{once:true}}
        className="w-32 h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center" alt="experience image"/>
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light '>{title}</h4>
        <p className='font-bold text-2xl mt-1'>{company}</p>
        <div className='flex space-x-2 my-2'>
          { 
          tech.map((data,idx)=>(
          <img key={idx} src={data}  className='h-[32px] w-[32px]'/>
          ))
          }
        </div>
        <p className='uppercase py-5 text-gray-300 tracking-[5px]'>{date}</p>
        <ul className='list-disc space-y-2 text-lg'>
          {details.map((detail,idx)=>(
            <li key={idx}>{detail}</li>
          ))}
        </ul>
        
      </div>
    </article>
  )
}

