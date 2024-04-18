import React from 'react'

type Props = {
    number:number;
    title: string;
    description: string;
}

export default function AboutCards({number,title,description}: Props) {
  return (
    <div className='flex flex-col text-[#c9fd74] bg-[#242424] w-full'>
        <div className='text-sm font-medium border-b border-[#c9fd74] pb-3'>0{number}</div>
        <div className='text-3xl py-6'>{title}</div>
        <div className='text-white text-sm'>{description}</div>
    </div>
  )
}