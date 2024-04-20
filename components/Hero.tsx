"use client";
import { PageInfo } from "@/typings";
import { TitleText } from "./smallComponents/TitleText";
import CodeBy from "./CodeBy";
import globe from "../styles/assets/787.gif";
import Image from "next/image";

type Props = {
  pageInfo: PageInfo;
};
export function Hero({ pageInfo }: Props) {
  return (
    <div className="text-white bg-transparent w-full h-auto sm:h-screen flex flex-col justify-between pt-5">
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <div className="flex flex-col pl-4 sm:pl-8 gap-10 sm:gap-0 text-[#c9fd74]">
          <CodeBy coder={pageInfo.name} to="/" />
          <TitleText titles={["Building", "experience", "that matters"]} />
        </div>
        <div className=" relative flex justify-center items-center z-10 h-40 w-40 right-6">
          <div className=" top-48 left-24 w-48 h-40 yellow bg-[#db8401]/50 blob movement"></div>
          <div className=" top-40 -right-10 w-52 h-40 red bg-[#c7057d]/70 blob movement"></div>
          <div className=" top-64 right-0 w-48 h-40 green bg-[#5f9c02]/60 blob movement"></div>
        </div>
        <div className="w-full sm:w-auto  flex justify-end mt-0 sm:mt-20 ">
          <div className="my-auto flex justify-between bg-white rounded-l-full w-32 h-14 sm:w-32 sm:h-12 lg:w-36 xl:w-40 xl:h-16">
            <div className=" flex-col justify-center flex my-auto ml-3 w-10 h-10 sm:w-10 sm:h-10 xl:w-12 xl:h-12 rounded-full bg-[#242424]">
              <div className="flex justify-center p-2">
                <Image src={globe} alt="globe" />
              </div>
            </div>
            <div className="text-[#242424] flex flex-col my-auto mx-auto font-medium text-[3vw] sm:text-[1.8vw] md:text-[1.5vw] lg:text-[1.2vw] xl:text-lg leading-5 sm:leading-4 lg:leading-5 xl:leading-6">
              <div className="mx-auto">Roots</div>
              <div>in India</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-screen mt-5 justify-between">
        <div className="flex flex-col gap-2 md:gap-3 xl:gap-4 ml-4 sm:ml-12">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 xl:w-3 xl:h-3 mx-auto rounded-full bg-[#c9fd74]"></div>
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 xl:w-3 xl:h-3 mx-auto rounded-full bg-[#c9fd74]"></div>
          <div className="flex mx-auto gap-4">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 xl:w-3 xl:h-3 rounded-full bg-[#c9fd74]"></div>
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 xl:w-3 xl:h-3 rounded-full bg-[#c9fd74]"></div>
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 xl:w-3 xl:h-3 rounded-full bg-[#c9fd74]"></div>
          </div>
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 xl:w-3 xl:h-3 mx-auto rounded-full bg-[#c9fd74]"></div>
        </div>
        <div className="flex w-2/3 md:w-1/2 justify-end mb-10 mr-8 gap-2">
          <div className=" w-20 h-20 sm:w-14 sm:h-14 my-auto text-[#c9fd74]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-full h-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
          <div className=" w-full sm:w-7/12 lg:w-1/2 uppercase lg:font-medium text-[2.8vw] sm:text-[1.8vw] md:text-[1.5vw] lg:text-[1.15vw]">
            Bringing digital products to life: From design to code, crafting
            professional websites with a focus on superior UI/UX
          </div>
        </div>
      </div>
    </div>
  );
}
