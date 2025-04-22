"use client"
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'




export default function Hero() {
    const [text]=useTypewriter({
        words:["Hi,The Name's [Gautam,Sameer] Mudawadkar","Yeah,I have two Names","Guy who loves Acting","<ButLovesToCodeMore/>"],
        loop:true,
        delaySpeed:2000
    })
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center overflow-hidden space-y-8">
      <BackgroundCircles/>
      <img src="/me.jpeg" alt="My Image" className='relative h-32 w-32 rounded-full mx-auto object-cover'/>
      <div className='z-20'>
        <h2 className='uppercase text-gray-500 tracking-[12px] pb-2'>Software developer</h2>
      <h1 className='text-3xl font-bold px-10'>
      <span>{text}</span>
      <Cursor cursorColor='#F7AB0A'/>
      </h1>
      <div className='pt-5'>
        <Link href="#About">
        <button className='heroButton'>About me</button>
        </Link>
        <Link href="#Experience">
        <button className='heroButton'>Experience</button>
        </Link>
        <Link href="#Projects">
        <button className='heroButton'>Projects</button>
        </Link>
        <Link href="#Skills">
        <button className='heroButton'>Skills</button>
        </Link>
      </div>
      </div>
    </div>
  )
}