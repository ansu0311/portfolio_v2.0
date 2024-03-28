"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Project } from "@/typings";
import { urlFor } from "@/sanity";
import Carousel from "./Carousel";

type Props = {
  projects: Project[];
};

export function ProjectTab({ projects }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [show, setShow] = useState(false);

  function slideNext() {
    if (activeIndex < projects.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  }
  function slidePrev() {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  }

  useEffect(() => {
    // Trigger animation when 'active' changes
    setShow(true);
    // Reset animation after a delay (adjust as needed)
    const timeout = setTimeout(() => {
      setShow(false);
    }, 500); // 2000 milliseconds (2 seconds) delay, adjust as needed

    return () => clearTimeout(timeout); // Cleanup on component unmount
  }, [activeIndex]);

  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setIsSmallScreen(newWindowWidth < 650);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-screen pt-16 md:pt-12 lg:pt-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className=" flex flex-col relative text-center md:text-left md:flex-row justify-evenly mx-auto items-center"
      >
        <h3 className="absolute top-5 uppercase tracking-[0.8rem] text-gray-500 text-lg md:text-3xl font-medium">
          Project
        </h3>
        <div className=" mt-6 md:mt-8 lg:mt-12"></div>
      </motion.div>
      <div className=" w-10/12 lg:w-9/12  mx-auto">
        <div className="relative w-full h-[45rem] lg:h-[35rem] flex justify-center">
          {projects.map((project, index) => {
            return (
              <Carousel
                key={index}
                index={index}
                activeIndex={activeIndex}
                sourceImg={urlFor(project.Image).url()}
                title={project.title}
                summary={project.summary}
                lengthArr={projects.length}
                technologies={project.technologies}
              />
            );
          })}
          <div className="w-full flex justify-between z-50 ">
            <button id="prev" onClick={() => slidePrev()} className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="border-2 w-12 h-12 border-purple-500/30 hover:bg-purple-500/30 p-2 rounded-full "
              >
                <path
                  fill-rule="evenodd"
                  d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <button id="next" onClick={() => slideNext()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="border-2 w-12 h-12 border-purple-400/50 hover:bg-purple-400/50 dark:border-purple-500/30 dark:hover:bg-purple-500/30 p-2 rounded-full "
              >
                <path
                  fill-rule="evenodd"
                  d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// {/* <div
//         className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-28
//         scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-purple-500/40"
//       >
//         {projects.map((project) => {
//           return (
//             <div
//               key={project._id}
//               className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center
//             p-20 md:p-44 h-screen"
//             >
//               <motion.div
//                 initial={{
//                   y: -300,
//                   opacity: 0,
//                 }}
//                 transition={{ duration: 1.2 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="w-1/3 lg:w-1/4 rounded-md"
//               >
//                 <img src={urlFor(project.Image).url()} alt={project.title + "img"} />
//               </motion.div>
//               <div className=" space-y-10 px-0 md:px-10 grid grid-cols-6 flex-col">
//                 <div className=" col-span-4 col-start-2">
//                 <div className="text-2xl font-semibold text-center">
//                   {project.title}
//                 </div>
//               <p className="text-md text-center md:text-left">
//                 {project.summary}
//               </p>
//               </div>
//               </div>
//             </div>
//           );
//         })}
//       </div> */}
