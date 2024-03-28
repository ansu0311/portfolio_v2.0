import { motion } from 'framer-motion'
import React from 'react'

export function BackGroundCircles() {
  return (
    <motion.div
    initial = {{
        opacity: 0,
    }}
    animate = {{
        scale:[1,2,2,3,1],
        opacity: [0.1,0.2,0.4,0.8,0.1,1],
    }}
    transition = {{
        duration: 2.5,
    }}
    className='relative z-0 flex flex-col justify-center items-center'>
        <div className=' absolute border-purple-700/50 dark:border-purple-500/50 border rounded-full 
        h-[30vw] sm:h-[25vw] md:h-[24vw] lg:h-[22vw] xl:h-[15vw] 2xl:h-[10vw] 
        w-[30vw] sm:w-[25vw] md:w-[24vw] lg:w-[22vw] xl:w-[15vw] 2xl:w-[10vw] mt-20 animate-ping'></div>
        <div className=' absolute border-purple-700/50 dark:border-purple-500/50 border rounded-full 
        h-[35vw] sm:h-[32vw] md:h-[28vw] lg:h-[26vw] xl:h-[18vw] 2xl:h-[14vw] 
        w-[35vw] sm:w-[32vw] md:w-[28vw] lg:w-[26vw] xl:w-[18vw] 2xl:w-[14vw] mt-20 animate-ping'></div>
        <div className=' absolute border-purple-700/50 dark:border-purple-500/50 border rounded-full 
        h-[40vw] sm:h-[35vw] md:h-[32vw] lg:h-[30vw] xl:h-[22vw] 2xl:h-[18vw] 
        w-[40vw] sm:w-[35vw] md:w-[32vw] lg:w-[30vw] xl:w-[22vw] 2xl:w-[18vw] mt-20 animate-ping'></div>
        <div className=' absolute border-purple-700/40 dark:border-purple-400/40 border-2 rounded-full 
        h-[85vw] sm:h-[70vw] md:h-[65vw] lg:h-[60vw] xl:h-[45vw] 2xl:h-[40vw] 
        w-[85vw] sm:w-[70vw] md:w-[65vw] lg:w-[60vw] xl:w-[45vw] 2xl:w-[40vw]  mt-20 animate-pulse'></div>
    </motion.div>
  )
}