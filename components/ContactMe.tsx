import { PageInfo } from "@/typings";
import { useRouter } from "next/router";
import { TitleText2 } from "./smallComponents/TitleText";
import { SocialIcon } from "react-social-icons";
import { MagneticFramer } from "./smallComponents/MagneticFramer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {ButtonDesign} from "./ButtonDesign/ButtonDesign";

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
      className="px-4 sm:px-8 xl:px-0 h-screen flex flex-col justify-center gap-8 max-w-6xl mx-auto"
    >
      <div className="flex flex-col mx-auto">
        <TitleText2 titles={["Communication matters to"]} />
        <div className="flex justify-center gap-4">
          <TitleText2 titles={["start good things"]} />
          <motion.p
            transition={{ duration: 1.2 }}
            animate={isInView ? { rotate: 360, scale: [0, 1] } : {}}
            viewport={{ once: true }}
            className=" text-[#c9fd74] text-[2.5rem] sm:text-[3rem] sm:leading-[2.5rem] md:text-[3.8rem] md:leading-[3.5rem] lg:text-[5rem] lg:leading-[4.5rem] xl:text-[6rem] xl:leading-[6rem]"
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
      <div className="w-3/4 mx-auto font-medium gap-4 flex flex-col sm:flex-row justify-start">
        <ButtonDesign text={pageInfo.email} />
        <ButtonDesign text={pageInfo.phoneNumber} />
      </div>
      <motion.div
        transition={{ duration: 0.8 }}
        animate={isInView ? { x: [+200, 0] } : {}}
        viewport={{ once: true }}
        className="gap-2 flex justify-end"
      >
        {pageInfo.socials.map((e) => (
          <motion.div
            whileHover={{ scale: [null, 1.6, 1.4] }}
            transition={{ duration: 0.5 }}
          >
            <SocialIcon
              key={e._id}
              className="w-8 h-8 sm:w-10 sm:h-10"
              style={{ width: "4rem", height: "4rem" }}
              url={e.url}
              label={e.title}
              bgColor="transparent"
              fgColor="#c9fd74"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

{
  /* <div className=" h-screen flex flex-col justify-center max-w-7xl mx-auto pt-10">
      <div className="flex flex-col mx-auto">
        <TitleText2 titles={["Communication matters to","start good things/"]} />
      </div>
      <div className="w-3/4 mx-auto flex justify-end my-12 relative">
        <MagneticFramer> <button
          type="button"
          onClick={() => router.push("mailto:ansuman.nayak03@gmail.com")}
          className="w-28 h-28 mr-16 rounded-full flex flex-col justify-center bg-blue-600 z-10"
        >
          <div className="text-white mx-auto w-14 text-center text-xl leading-6 font-medium">
          Get in touch
          </div>
        </button></MagneticFramer>
        <hr className="absolute border-gray-500 border-[1px] w-full top-1/2 z-0" />
      </div>
      <div className="w-3/4 mx-auto font-medium gap-4 flex justify-start">
        <div className="py-2 px-5 border border-black rounded-full">
          {pageInfo.email}
        </div>
        <div className="py-2 px-5 border border-black rounded-full">
          {pageInfo.phoneNumber}
        </div>
      </div>
      <motion.div
        initial={{
          x: +200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="gap-2 flex justify-end mt-16"
      >
        {pageInfo.socials.map((e) => (
          <SocialIcon
            key={e._id}
            className="w-10 h-10"
            style={{ width: "4rem", height: "4rem" }}
            url={e.url}
            label={e.title}
            bgColor="transparent"
            fgColor="#2563EB"
          />
        ))}
      </motion.div>
    </div> */
}
