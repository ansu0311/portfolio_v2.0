import { motion } from 'framer-motion'
import { useEffect, useState } from "react";
import style from "./style.module.scss"

type Props = {
    children: any,
    text:string,
}

export function Curve({children,text}: Props) {
  
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;

  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 1, ease: [0.56, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <>
    <>{children}</>
      <motion.div 
    className={style.slideIn}
    initial={{ scaleY: 0 }}
    animate={{ scaleY: 0 }}
    exit={{ scaleY: 1 }}
    transition={{duration: 1, ease:[0.22,1,0.36,1]}}
    >
    </motion.div>
    <motion.div 
    className={style.slideOut}
    initial={{ scaleY: 1 }}
    animate={{ scaleY: 0 }}
    exit={{ scaleY: 0 }}
    transition={{duration: 1, ease:[0.22,1,0.36,1]}}
    >
      
    </motion.div>
    </>
  )
}
