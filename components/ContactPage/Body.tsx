"use client";
import { TitleText4 } from "../smallComponents/TitleText";
import { motion } from "framer-motion";

type Props = {
  imageLink: string;
};

export function Body({ imageLink }: Props) {
  return (
    <main className="mt-5 sm:mt-10 h-auto overflow-hidden max-w-6xl px-4 sm:px-8 xl:px-0 flex justify-center mx-auto">
      <div className=" w-full flex flex-col justify-center items-center ">
        <div className="flex justify-center gap-[20vw] w-full py-10 sm:py-16">
          <div className="flex flex-col">
          <p className="flex w-full justify-start"><TitleText4 titles={["Let's create"]} /></p>
          <p className="flex w-full justify-start"><TitleText4 titles={["something"]} /></p>
          <p className="flex w-full justify-start text-[#c9fd74]"><TitleText4 titles={["remarkable?"]} /></p>
          </div>
          <motion.div
                transition={{ duration: 1.2, delay: 0.4 }}
                whileInView={{ scale: [0, 1.2, 1] }}
                viewport={{ once: true }}
                className=" object-center rounded-full h-[7rem] w-[7rem] md:h-[8rem] md:w-[8rem]  xl:h-[10rem] xl:w-[10rem] my-auto overflow-hidden"
              >
                <img
                  src={imageLink}
                  alt="profile"
                  className=" h-full w-auto object-cover object-center"
                />
        </motion.div>
        </div>
      </div>
    </main>
  );
}
