"use client"
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/16/solid'
import React, { ReactEventHandler, useState } from 'react'

type Inputs={
    name:String,
    email:String,
    subject:String,
    message:String
}
type Props = {}

function Contact({}: Props) {
const [data,setData]=useState({Name:'',Email:'',Subject:'',Message:''});
const handleChange=(e:any)=>{
    e.preventDefault();
     const {name,value}=e.target;
     setData({...data,[name]:value})
 }
 const handleSubmit=(e:ReactEventHandler | any)=>{
    e.preventDefault();
    window.location.href=`mailto:sameermudawadkar2@gmail.com?subject=${e.Email}&body=Hi,My Name is ${e.Name}.${e.Message}`
 }
  return (
    <div className='relative h-screen flex flex-col justify-evenly overflow-hidden
    items-center text-center md:flex-row max-w-full'>
    <h3 className=' absolute top-24 text-2xl font-semibold tracking-[15px] text-gray-500 uppercase'>
       Contact 
   </h3>
   <div className='flex flex-col space-y-5 items-center'>
    <div className='flex flex-col items-center space-y-5'>
    <h2 className='text-2xl font-bold text-center w-screen lg:mt-30'>I have got just what you need.
    <span className='underline'>Let's Talk.</span>
    </h2>
    <div className='flex items-center'>
    <PhoneIcon className='h-7 w-7 animate-pulse text-[#F7AB0A]'/>
    <p>sameermudawadkar@gmail.com</p>
    </div>
    <div className='flex items-center'>
    <EnvelopeIcon className='h-7 w-7 animate-pulse text-[#F7AB0A]'/>
    <p>+917588119489</p>
    </div>
    </div>
    <form onSubmit={(e)=>handleSubmit(e)}  className='flex flex-col space-y-2 mx-5'>
    <div className='flex space-x-2'>
      <input type="text" name="Name" placeholder='Name' onChange={(e)=> handleChange(e)} className="contactInput"/>
      <input type="email" name="Email" placeholder='Email' onChange={(e)=> handleChange(e)} className="contactInput"/>
      </div>
      <input type="text" name="Subject" placeholder='Subject' onChange={(e)=> handleChange(e)} className="contactInput"/>
      <textarea  placeholder='Message' name="Message" onChange={(e)=> handleChange(e)} className='contactInput'/>
      <button type="submit" className='w-100 py-5 px-10 rounded-md text-black bg-[#F7AB0A] font-bold text-lg'>Submit</button>
    </form>
    </div>

   </div>
  )
}

export default Contact