import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion, useViewportScroll } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';

const slider1 = [
    {
        color: "#e3e5e7",
        src: "c2.jpg"
    },
    {
        color: "#d6d7dc",
        src: "decimal.jpg"
    },
    {
        color: "#e3e3e3",
        src: "funny.jpg"
    },
    {
        color: "#21242b",
        src: "google.jpg"
    }
]

const slider2 = [
    {
        color: "#d4e3ec",
        src: "maven.jpg"
    },
    {
        color: "#e5e0e1",
        src: "panda.jpg"
    },
    {
        color: "#d7d4cf",
        src: "powell.jpg"
    },
    {
        color: "#e1dad6",
        src: "wix.jpg"
    }
]

export function SlidingImage() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["0% 100%", "100% 0%"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

    return (
        <div ref={container} className={styles.slidingImages}>
            <motion.div style={{x: x1}} className={styles.slider}>
                    {
                        slider1.map( (project, index) => {
                            return <div key={index} className={styles.project} style={{backgroundColor: project.color}} >
                                <div className={styles.imageContainer}>
                                    <Image 
                                    fill={true}
                                    alt={"image"}
                                    src={`/images/${project.src}`}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{x: x2}} className={styles.slider}>
                    {
                        slider2.map( (project, index) => {
                            return <div key={index} className={styles.project} style={{backgroundColor: project.color}} >
                                <div key={index} className={styles.imageContainer}>
                                    <Image 
                                    fill={true}
                                    alt={"image"}
                                    src={`/images/${project.src}`}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{height}} className={styles.circleContainer}>
                    <div className={styles.circle}></div>
                </motion.div>
        </div>
    )
}
export function SlidingImage1() {

    const [dimension, setDimension] = useState({ width: 0});
    useEffect(() => {
      setDimension({ width: window.innerWidth});
    }, []);

    return (
<svg width="100vw" height="20vh">
  <path d={`M0 250 L${dimension.width} 250 L${dimension.width} 0 Q${dimension.width / 2} 250 0 0  L0 0`}
        fill="white" stroke-width="3" />
</svg>    )
}

export function SlidingImage2() {
    const [dimension, setDimension] = useState({ width: 0});
    useEffect(() => {
      setDimension({ width: window.innerWidth});
    }, []);

    return (
<svg width="100vw" height="20vh">
  <path d={`M0 0 L${dimension.width} 0 L${dimension.width} 0 Q${dimension.width / 2} 250 0 0  L0 0`}
        fill="white" stroke-width="3" />
</svg>    )
}