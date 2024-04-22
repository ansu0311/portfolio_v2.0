"use client";
import { useEffect, useState } from "react";
import Button from "./Button";
import Nav from "./Nav";
import { AnimatePresence, motion } from "framer-motion";

export default function index() {
  const [isActive, setIsActive] = useState(false);
  const [windowSize, setWindowSize]:any = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    },[])

  const menu = {
    open: {
      width:((windowSize.width>650)?"30vw":"60vw"),
      height: "95vh",
      top: ((windowSize.width>650)?"-25px":"-5px"),
      right:((windowSize.width>650)?"-25px":"-5px"),
      transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: "50px",
      height: "50px",
      top: "0px",
      right: "0px",
      transition: {
        duration: 0.75,
        delay: 0.35,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <div className=" fixed right-6 top-5 sm:right-12 sm:top-10 z-40">
      <motion.div
        className={" w-full h-full bg-[#c9fd74] rounded-3xl relative"}
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>
      {isActive && <Nav setIsActive={setIsActive} />}
  </AnimatePresence>
  </motion.div>
      <Button
        isActive={isActive}
        toggleMenu={() => {
          setIsActive(!isActive);
        }}
      />
    </div>
  );
}
