import React from 'react'

type Props = {
  src:string,
  title: string,
  jobtitle?:string,
}

export function AboutSkills({src,title}: Props) {
    return (
        <div className='flex gap-2 z-0 grayscale hover:grayscale-0'>
          <div className='w-7 h-7 p-0.5'>
          <img src={ src } className='object-center'/>
          </div>
          <div className='my-auto font-medium text-sm'>{title}</div>
        </div>
      )
}

export function AboutExperience({src,title,jobtitle}: Props) {
    return (
        <div className='flex gap-2 z-0 grayscale hover:grayscale-0'>
          <div className='w-7 h-7 p-0.5'>
          <img src={ src } className='object-center'/>
          </div>
          <div className='my-auto font-medium text-sm'>{title} - {jobtitle}</div>
        </div>
      )
}