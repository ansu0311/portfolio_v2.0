import { PageInfo } from '@/typings'
import { EnvelopeOpenIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/16/solid'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {useForm,SubmitHandler} from 'react-hook-form'
import PageHeading from './PageHeading'

type Input = {
  name: string
  email: string
  message: string
  subject: string
}

type Props = {
  pageInfo: PageInfo[]
}

export function ContactMe({pageInfo}: Props) {
  
  const { register, handleSubmit, watch, formState:{errors},} = useForm<Input>();
  const onSubmit : SubmitHandler<Input> = (formData) => {
    console.log(formData);
    
   // window.location.href = `mailto:ansuman.nayak03@gmail.com?subject=${formData.subject}&body=Hi, ${formData.name} here.\n ${formData.message}(${formData.email})`
  }
  

  return (
    <PageHeading heading='Contact'>
    <div className='flex flex-col space-y-10'>
      <h4 className='text-2xl font-medium text-center'>
      A Project on your mind?
        <div className=' text-purple-400/70 text-3xl font-bold'>Let's connect</div>
      </h4>

      <div className=' text-lg md:text-md space-y-2 md:space-y-5'>
        <div className='flex items-center space-x-5 justify-center'>
          <PhoneIcon className=' text-purple-500 h-7 w-7 animate-pulse'/>
          <p>{pageInfo[0].phoneNumber}</p>
        </div>
        <div className='flex items-center space-x-5 justify-center'>
          <EnvelopeOpenIcon className=' text-purple-500 h-7 w-7 animate-pulse'/>
          <p>{pageInfo[0].email}</p>
        </div>
        <div className='flex items-center space-x-5 justify-center'>
          <MapPinIcon className=' text-purple-500 h-7 w-7 animate-pulse'/>
          <p>{pageInfo[0].address}</p>
        </div>
    </div>

    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-11/12 sm:w-fit mx-auto">
      <div className='flex flex-col sm:flex-row space-x-0 sm:space-x-2 space-y-2 sm:space-y-0'>
        <input {...register('name')} type='text' placeholder='First Name' className="contactInput"></input>
        <input {...register("email")} type='email' placeholder='Email' className="contactInput"></input>
      </div>

      <input {...register("subject")} type="text" placeholder='Subject' className="contactInput" />

      <textarea {...register("message")} placeholder='Message' className='contactInput'/>
      <button className='pt-2 bg-zinc-300/40 transition-all ease-in-out duration-150 text-black hover:bg-purple-500/70 h-14 rounded-md text-lg font-semibold '>Submit</button>
    </form>

      </div>
    </PageHeading>
  )
}