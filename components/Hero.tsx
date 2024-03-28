"use client";
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { BackGroundCircles } from './BackGroundCircles'
import Link from 'next/link'
import { PageInfo } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
  pageInfo: PageInfo
}
export function Hero({pageInfo}: Props) {
  
  const [ text, count ] = useTypewriter({
    words:[`Hi, The Name's ${pageInfo.name}`,
    "Guy-who-loves-Coffee.tsx",
    "<ButLovesToCodeMore />",],
    loop:true,
    delaySpeed:2000,
  })

  return (
    <div className='w-full h-screen flex flex-col item-center justify-center text-center overflow-hidden pt-16 md:pt-12 lg:pt-24'>
      <BackGroundCircles/>
      <div className='flex justify-center'>
      <img className='h-24 w-24 md:h-28 md:w-28 lg:w-32 lg:h-32 bg-slate-50/50 object-cover rounded-full overflow-hidden'
       src={urlFor(pageInfo.heroImage).url()} alt="display picture" />
      </div>
      <div className='text-md lg:text-xl uppercase text-gray-700 dark:text-gray-500 py-1 tracking-widest'>{pageInfo.role}</div>
      <div className='flex justify-center text-lg lg:text-xl font-semibold'>
        <div className='my-auto text-purple-600/80 dark:text-purple-200/80'>{text}</div>
        <Cursor cursorColor='rgb(168, 85, 247)'/>
      </div>
      <div className='flex justify-center gap-2 pt-5 z-50 text-md font-semibold '>
        <Link href="#about">
        <div className='heroButton'>About</div>
        </Link>
        <Link href="#experience">
        <div className='heroButton'>Experience</div>
        </Link>
        <Link href="#skills">
        <div className='heroButton'>Skills</div>
        </Link>
        <Link href="#projects">
        <div className='heroButton'>Project</div>
        </Link>
      </div>
    </div>
  )
}