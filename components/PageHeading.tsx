import { motion } from 'framer-motion';
import React from 'react'

type Props = {
    heading: string;
    children: any;
}

export default function PageHeading({heading,children}: Props) {
    return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className=' flex flex-col relative h-screen text-center md:text-left md:flex-row justify-evenly mx-auto items-center'>
      <h3 className='absolute top-20 uppercase tracking-[0.8rem] text-gray-500 text-3xl sm:text-xl md:text-3xl font-medium'>{heading}</h3>
      <div className=' mt-10'>
      {children}
      </div>
      </motion.div>
  )
}