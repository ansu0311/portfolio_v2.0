import { ExperienceTile } from './ExperienceTile'
import { Experience } from '@/typings'
import { urlFor } from '@/sanity'
import PageHeading from './PageHeading'

type Props = {
  experience : Experience[]
}

export function ExperienceTab({experience}: Props) {

  return (
    <PageHeading heading='experience' >
    <div className='flex w-full p-10 justify-center'>
      {experience.map((e,index) =>{
      return <ExperienceTile key={index}
      company={e.company}
    companyImage ={urlFor(e.companyImage).url()}
    dateStarted = {e.dateStarted}
    dateEnded = {e.dateEnded}
    currentWorking = {e.currentWorking}
    jobTitle = {e.jobTitle}
    points = {e.points}
    technologies = {e.technologies}/>})}
    </div>
    
    </PageHeading>
  )
}