'use client';
import Link from 'next/link';
import React from 'react'

type Props = {
    index:number,
    title:string,
    setModal:any,
    url:string,
}

export default function ProjectTemplate({url,index, title, setModal}: Props) {
  return (
    <Link href={url} target='_blank'><div onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}}
     className="project hover:text-white/50 flex w-full justify-between items-center px-5 sm:px-10 py-5 border-t border-[rgp(201,201,201)] cursor-pointer transition-all duration-200">
            <h2 className=' text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl m-0 font-normal transition-all duration-500'>{title}</h2>
            <p className=' text-sm sm:text-base font-light transition-all duration-500'>Design & Development</p>
        </div></Link>
  )
}