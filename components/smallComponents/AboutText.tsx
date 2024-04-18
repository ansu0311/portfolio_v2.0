"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Props = {
    texts:string[],
}

export default function AboutText({texts}: Props) {
  const animation = {
    initial: {y: "100%"},
    enter: (i:any) => ({y: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });
  return (
    <div ref={ref} className="text-3xl">
      {
        texts.map( (text, index) => {
          return <div key={index} className="overflow-hidden">
            <motion.p className="m-0 text-sm sm:text-xs md:text-base lg:text-lg " custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{text}</motion.p>
          </div>
        })
      }
    </div>
  )
}