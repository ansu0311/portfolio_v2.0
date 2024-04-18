import React from 'react'

type Props = {
    indexNumber: number;
    label: string;
    placeholder:string;
    onChange: Function;
    type:string;
}

export default function ContactInput({indexNumber,label,placeholder,onChange,type}: Props) {
  return (
    <div className='border-t border-white/70 text-white/70 grid grid-cols-12 py-6'>
        <div className=' text-xs xl:text-sm font-medium col-span-1 pt-0.5'>0{indexNumber}</div>
        <div className=' text-sm xl:text-base col-span-11 flex flex-col gap-2'>
            <div>{label}</div>
            <input className=' outline-none bg-transparent text-[#c9fd74] placeholder:text-white/40'
            placeholder={placeholder} type={type} onChange={(e)=>onChange(e.target.value)}/>
        </div>
    </div>
  )
}