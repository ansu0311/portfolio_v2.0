import { motion } from 'framer-motion'

type Props = {
  directionLeft?: boolean,
  src:string,
  progress: number,
  title: string,
}

export function SkillIcons({directionLeft,title,src,progress}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.div 
      initial = {{
        x: ((directionLeft) ? (-200):(200)),
        opacity: 0
      }}
      transition={{duration:1}}
      whileInView={{opacity: 1, x:0}}
      >
        <img src={ src } alt={title} className='p-2 rounded-full border-2 border-purple-500/30 dark:border-purple-300/40 
         object-scale-down w-[3.8rem] h-[3.8rem] md:w-20 md:h-20 lg:w-16 lg:h-16 xl:w-[4.2rem] xl:h-[4.2rem]'/>
      </motion.div>
    </div>
  )
}