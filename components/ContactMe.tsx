import { PageInfo } from "@/typings";
import { useRouter } from "next/router";
import { TitleText2 } from "./smallComponents/TitleText";
import { SocialIcon } from "react-social-icons";
import { MagneticFramer } from "./smallComponents/MagneticFramer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {ButtonDesign3} from "./ButtonDesign/ButtonDesign";
import Link from "next/link";
import globe from "../styles/assets/787.gif";
import Image from "next/image";

type Input = {
  name: string;
  email: string;
  message: string;
  subject: string;
};

type Props = {
  pageInfo: PageInfo;
};

export function ContactMe({ pageInfo }: Props) {
  // for routing
  const router = useRouter();
  // to aniamte the circle button when in view
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="px-4 sm:px-8 xl:px-0 my-16 sm:my-0 h-auto sm:h-screen flex flex-col justify-center gap-6 max-w-6xl mx-auto"
    >
      <div className="flex flex-col mx-auto">
        <TitleText2 titles={["Communication matters to"]} />
        <div className="flex justify-center gap-1 sm:gap-4">
          <TitleText2 titles={["start good things"]} />
          <motion.p
            transition={{ duration: 1.2 }}
            animate={isInView ? { rotate: 360, scale: [0, 1] } : {}}
            viewport={{ once: true }}
            className=" text-[2.2rem] sm:text-[3rem] sm:leading-[2.5rem] md:text-[3.8rem] md:leading-[3.5rem] lg:text-[5rem] lg:leading-[4.5rem] xl:text-[6rem] xl:leading-[6rem]"
          >
            /
          </motion.p>
        </div>
      </div>
      <div className="w-3/4 mx-auto flex justify-end relative">
        <MagneticFramer>
          <motion.div
            transition={{ duration: 1.2 }}
            animate={isInView ? { x: [-200, 50, 0] } : {}}
            viewport={{ once: true }}
          >
            <button
              type="button"
              onClick={() => router.push("mailto:ansuman.nayak03@gmail.com")}
              className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mr-5 md:mr-16 rounded-full flex flex-col justify-center bg-[#c9fd74] z-10"
            >
              <div className="text-[#242424] mx-auto w-14 text-center leading-5 sm:text-lg lg:text-xl sm:leading-5 lg:leading-6 font-semibold sm:font-medium">
                Get in touch
              </div>
            </button>
          </motion.div>
        </MagneticFramer>
        <hr className="absolute border-gray-500 border-[1px] w-full top-1/2 z-0" />
      </div>
      <div className="w-full justify-center flex flex-col gap-5 lg:gap-20 lg:flex-row lg:px-20 mt-5">
        <div className='flex flex-col mx-auto lg:mx-0  bg-transparent'>
        <div className='w-64 lg:w-full text-sm font-medium border-b text-[#c9fd74] border-[#c9fd74] pb-1'>Contact Details</div>
        <div className="flex flex-col mt-3 gap-1">
          <Link className="text-white hover:text-[#c9fd74]"  href={`mailto:${pageInfo.email}`}>{pageInfo.email}</Link>
          <Link className="text-white hover:text-[#c9fd74]" target="_blank" href={`https://wa.me/+91${pageInfo.phoneNumber}`}>+91{pageInfo.phoneNumber}</Link>
         <div className="w-full flex justify-center">
          <div className="my-auto flex py-1 gap-2 bg-white w-full rounded-full">
            <div className=" flex-col justify-center flex my-auto m-1 w-8 h-8 rounded-full bg-[#242424]">
              <div className="flex justify-center p-2">
                <Image src={globe} alt="globe" />
              </div>
            </div>
            <div className="text-[#242424] flex flex-col my-auto font-medium text-sm">
              Roots in India
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="flex flex-col">
      <motion.div
      transition={{ duration: 0.8 }}
      animate={isInView ? { x: [+200, 0] } : {}}
      viewport={{ once: true }}>
      <div className="gap-2 flex justify-center">
        {pageInfo.socials.map((e) => (
          <motion.div
          key={e._id}
            whileHover={{ scale: [null, 1.6, 1.4] }}
            transition={{ duration: 0.5 }}
          >
            <SocialIcon
              key={e._id}
              className="w-6 h-6 sm:w-10 sm:h-10"
              style={{ width: "3.5rem", height: "3.5rem" }}
              url={e.url}
              label={e.title}
              bgColor="transparent"
              fgColor="#c9fd74"
            />
          </motion.div>
        ))}
      </div>
      <p className="flex justify-center w-full mt-1">
      <ButtonDesign3 text={"View Resume"} link="https://drive.google.com/file/d/1nAelXE1CLXMYDqlhg2yks1e0hGm_9kOO/view?usp=sharing" target="_blank" />
      </p>
      </motion.div>
    </div></div>
    </div>
  );
}
