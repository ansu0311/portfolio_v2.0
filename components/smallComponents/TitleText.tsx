"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Props = {
  titles: string[];
};
export function TitleText({titles}: Props) {
  const animation = {
    initial: {y: "100%"},
    enter: (i:any) => ({y: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });
  
  return (<div ref={ref} className="text-3xl">
      {
        titles.map( (title, index) => {
          return <div key={index} className="overflow-hidden">
            <motion.p className="m-0 text-[3.5rem] leading-[4rem] sm:text-[2.7rem] sm:leading-[2.7rem] md:text-[3.5rem] md:leading-[3.5rem] lg:text-[4.5rem] lg:leading-[4.3rem] xl:text-[6.5rem] xl:leading-[6rem] uppercase" custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{title}</motion.p>
          </div>
        })
      }
    </div>
  )
}

export function TitleText2({titles}: Props) {
  const animation = {
    initial: {y: "100%"},
    enter: (i:any) => ({y: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });
  
  return (<div ref={ref} >
  {
    titles.map( (title, index) => {
      return <div key={index} className="overflow-hidden text-center">
        <motion.p className=" sm:mb-4 text-[2.5rem] sm:text-[2rem] sm:leading-[1.5rem] md:text-[2.8rem] md:leading-[2.5rem] lg:text-[4rem] lg:leading-[3.5rem] xl:text-[5rem] xl:leading-[5rem]" custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{title}</motion.p>
      </div>
    })
  }
</div>
)
}

export function TitleText3({titles}: Props) {
  const animation = {
    initial: {y: "100%"},
    enter: (i:any) => ({y: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });
  
  return (<div ref={ref} >
  {
    titles.map( (title, index) => {
      return <div key={index} className="overflow-hidden text-center">
        <motion.p className=" sm:mb-4 text-4xl" custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{title}</motion.p>
      </div>
    })
  }
</div>
)
}
export function TitleText4({titles}: Props) {
  const animation = {
    initial: {y: "100%"},
    enter: (i:any) => ({y: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });
  
  return (<div ref={ref} >
  {
    titles.map( (title, index) => {
      return <div key={index} className="overflow-hidden text-center">
        <motion.p className="pb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl" custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{title}</motion.p>
      </div>
    })
  }
</div>
)
}
//text-[6.5rem] leading-[7.5rem] mx-auto