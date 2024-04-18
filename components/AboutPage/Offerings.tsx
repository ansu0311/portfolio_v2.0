import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AboutCards from "./AboutCards";
import { TitleText3 } from "../smallComponents/TitleText";

type Props = {};
export default function Offerings({}: Props) {
  
  // to aniamte the circle button when in view
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <main ref={ref} className="overflow-hidden max-w-6xl px-4 sm:px-8 xl:px-0 flex flex-col justify-center mx-auto">
      <div className="flex justify-center sm:justify-start w-ful">
        <TitleText3 titles={["I can help you with"]} />
        <div className="pl-0.5 text-[#c9fd74]">
          <TitleText3 titles={["..."]} />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row text-sm md:text-base justify-center mx-auto sm:mx-0 pt-10 gap-[4vw]">
        <motion.div 
        transition={{ duration: 1.2 }}
        animate={isInView ? { x: [-150, 50, 0] , opacity:[0,1] } : {}}
        viewport={{ once: true }}
        className="w-[65vw] sm:w-[30vw] md:w-[25vw] xl:w-[20vw]">
          <AboutCards
            number={1}
            title={"Design"}
            description={
              "I create user-friendly interfaces that are engaging and accessible by translating user needs into practical design solutions."
            }
          />
        </motion.div>
        <motion.div 
        transition={{ duration: 1.2 }}
        animate={isInView ? { x: [-150, 50, 0] , opacity:[0,1] } : {}}
        viewport={{ once: true }}
        className="w-[65vw] sm:w-[30vw] md:w-[25vw] xl:w-[20vw]">
          <AboutCards
            number={2}
            title={"Development"}
            description={
              "I collaborate with others to create exceptional web experiences, leveraging my front-end development skills and back-end insights."
            }
          />
        </motion.div>
      </div>
    </main>
  );
}
