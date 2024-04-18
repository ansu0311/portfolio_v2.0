import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { links } from './data';
import { perspective } from "./anim";
import Link from 'next/link';

type Props ={
  setIsActive?:any,
}

export default function index({setIsActive}:Props) {
  return (
    <div className={styles.nav}>
       <div className={styles.body}>
        {
            links.map( (link, i) => {
                return (
                    <div key={`b_${i}`} className={styles.linkContainer}>
                        <motion.div
                          custom={i}
                          variants={perspective}
                          initial="initial"
                          animate="enter"
                          exit="exit"
                        >
                            <Link className=' text-3xl md:text-4xl lg:text-5xl' onClick={()=>setIsActive(false)} href={link.href}>
                                {link.title}
                            </Link>
                        </motion.div>
                    </div>
                )
            })
        }
       </div>
    </div>
  )
}