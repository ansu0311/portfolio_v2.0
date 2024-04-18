import { motion } from 'framer-motion';
import styles from './style.module.scss';

type Props={
    isActive: boolean,
    toggleMenu:any,
}

export default function Button({isActive, toggleMenu}:Props) {
  return (
    <div className={styles.button}>
        <motion.div 
            className={styles.slider}
            animate={{top: isActive ? "-100%" : "0%"}}
            transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1]}}
        >
            <div 
                className={styles.el}
                onClick={() => {toggleMenu()}}
            >
                <PerspectiveText label="Menu"/>
            </div>
            <div 
                className={styles.el}
                onClick={() => {toggleMenu()}}
            >
                <PerspectiveText label="Close" />
            </div>
        </motion.div>
    </div>
  )
}

type Props2={
    label: string,
}

function PerspectiveText({label}:Props2) {
    return (    
        <div className={styles.perspectiveText}>
            <p>{label}</p>
            <p>{label}</p>
        </div>
    )
}
