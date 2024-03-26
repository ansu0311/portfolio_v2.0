import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Technology } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
  company: string;
    companyImage: string;
    dateStarted: Date;
    dateEnded:Date;
    currentWorking:boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}

function ShowDate(GivenDate: Date){
  const month = GivenDate.toLocaleString("default", { month: "long" });
  const day = GivenDate.getDate();
  const year = GivenDate.getFullYear();
  return  (month + " " + day + ", " + year);
}

export function ExperienceTile({company,companyImage,dateEnded,dateStarted,currentWorking,jobTitle,points,technologies}: Props) {
  
  const dateStartSec = new Date(dateStarted)
  const dateEndSec = new Date(dateEnded)
  

  return (
    <article className='flex my-2 pb-1 md:m-0 md:py-2 flex-col rounded-xl items-center space-y-1 flex-shrink-0 w-full md:w-3/5 xl:w-1/3 snap-center bg-zinc-900'>
        <motion.div 
    initial ={{
      x: -200,
      opacity:0,
    }}
    transition={{
      duration:1.2,
    }}
    whileInView={{opacity:1, x:0}}
    viewport={{once:true}}
    className='flex justify-center'
    >
    <img src={companyImage} alt="profile"
      className='w-24 h-24 object-contain object-center'/>
    </motion.div>
    <div className='px-0 md:px-10'>
        <div className='flex gap-2 text-lg items-center justify-center'>
            <div className='mt-0.5 font-light my-auto'>{jobTitle}</div>
        {"-"}<div className='font-semibold mt-0.5 my-auto'>{company}</div>
        </div>
        <div className='flex justify-center space-x-2 my-1 md:my-2'>
          {technologies.map((tech,index)=>{
            return <div key={index} className=' flex items-center object-contain h-6 w-6 rounded-full'><img src={urlFor(tech.image).url()} alt={tech.title}/></div>
          })}
        </div>

        <p className=' capitalize flex justify-center py-1 md:py-2 text-gray-300 text-md'>
            {ShowDate(dateStartSec)} - {ShowDate(dateEndSec)}
        </p>

        <ul className='list-disc space-y-0.5 ml-0 px-10 md:px-0 md:ml-2 text-[0.85rem] lg:text-md text-justify pb-5'>
            {points.map((p,index)=>{
              return <li key={index}>{p}</li>
            })}
        </ul>
    </div>
    </article>
  )
}