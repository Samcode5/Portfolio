'use client';
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props ={}
export default function Header({}:Props){
    return(
        <header className="sticky top-0 p-5 flex flex-row items-start justify-between max-w-7xl mx-auto">
        <motion.div
            initial={{ x: -500, scale: 0.5, opacity: 0 }}
            animate={{ x: 0, scale: 1, opacity: 1 }}
            transition={{duration:1}}
            className="flex flex-row items-center"
            >
            <SocialIcon url="https://www.linkedin.com/in/gautam-mudawadkar-b4516a21a/" />
            <SocialIcon url="https://github.com/Samcode5/" />
          </motion.div>
          <motion.div
            initial={{ x: 500, scale: 0.5, opacity: 0 }}
            animate={{ x: 0, scale: 1, opacity: 1 }}
            transition={{duration:1}}
            className="flex flex-row items-center"
            >
            <SocialIcon network="email" className="cursor-pointer" bgColor="white" fgColor="red"/>
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in touch</p>
          </motion.div>
        </header>
    )
}