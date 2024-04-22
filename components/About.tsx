import { TitleText } from "./smallComponents/TitleText";
import AboutText from "./smallComponents/AboutText";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MagneticFramer } from "./smallComponents/MagneticFramer";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import { Skill } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  imageLink: string;
  skills: Skill[];
};

export function About({ imageLink,skills }: Props) {

  // to aniamte the circle button when in view
  const ref2 = useRef(null);
  const isInView = useInView(ref2, { once: true });

  return (
    <div ref={ref2} className="w-screen pt-8 pb-4 sm:pt-16 sm:pb-10">
      <div className="mx-auto h-auto px-4 sm:px-8 xl:px-0 max-w-6xl flex flex-col gap-16 sm:grid grid-cols-2 relative">
        <div className="col-span-1 flex flex-col justify-center gap-0 xl:gap-5">
            <div className="flex">
              <TitleText titles={["About"]} />
              <div className="text-[#c9fd74]">
                <TitleText titles={["*"]} />
              </div>
            </div>
            <div className="flex">
              <TitleText titles={["me"]} />
              <motion.div
                transition={{ duration: 1.2, delay: 0.4 }}
                whileInView={{ scale: [0, 1.2, 1] }}
                viewport={{ once: true }}
                className="rounded-full mx-5 h-[4rem] w-[4rem] sm:h-[5rem] sm:w-[5rem] md:h-[6rem] md:w-[6rem]  xl:h-[7rem] xl:w-[7rem] my-2 overflow-hidden"
              >
                <img
                  src={imageLink}
                  alt="profile"
                  className="h-full w-auto object-cover object-center"
                />
              </motion.div>
            </div>
        </div>
        <div className="pb-3 xl:pb-5 col-span-1 h-full flex flex-col justify-center">
          <div className="w-full xl:gap-4 flex justify-end">
            <AboutText
              texts={[
                "I'm a Developer and Designer from India, combining",
                "user-centric design with web development skills to",
                "create compelling digital experiences.",
              ]}
            />
          </div>
          <div className="flex justify-end">
            <MagneticFramer>
              <motion.div
                transition={{ duration: 1.2 }}
                animate={isInView ? { x: [+200, -20, 0] } : {}}
                viewport={{ once: true }}
              >
                <button
                  type="button"
                  className="w-16 h-16 xl:w-20 xl:h-20 rounded-full flex flex-col justify-center bg-[#c9fd74] z-10"
                >
                  <Link
                    href="/about"
                    className="text-[#242424] mx-auto w-14 text-center text-base xl:text-lg leading-6 font-medium"
                  >
                    More
                  </Link>
                </button>
              </motion.div>
            </MagneticFramer>
          </div>
        </div>
      </div>
      <div className=" flex bg-transparent overflow-hidden w-2/3 items-center rounded-full mx-auto mt-12">
        <Marquee gradientColor="#242424" pauseOnHover={false} gradient={true} speed={100} gradientWidth="15rem">
          {skills.map((skill,index)=>{
            return(<div className="flex flex-col items-center mx-10 p-2"> 
            <div className="flex gap-1 opacity-70 hover:scale-105 hover:opacity-100 grayscale hover:grayscale-0">
            <img key={index} className="h-8 transition-all " src={urlFor(skill.image).url()} alt={skill.title} />
            <p className=" text-[#c9fd74] text-xs my-auto capitalize font-medium"> - {skill.title}</p>
            </div>
          </div>)
          })}
          </Marquee>
        </div>
    </div>
  );
}
