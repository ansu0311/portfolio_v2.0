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
    <div className="text-white bg-[#242424] w-full h-screen flex flex-col justify-between pt-5">
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <div className="flex flex-col pl-4 sm:pl-8 gap-10 sm:gap-0 text-[#c9fd74]">
          <CodeBy coder={pageInfo.name} to="/" />
          <TitleText titles={["Building", "experience", "that matters"]} />
        </div>
        <div className="w-full sm:w-auto  flex justify-end mt-20 ">
        <div className="my-auto flex justify-between bg-white rounded-l-full w-40 h-16 sm:w-32 sm:h-12 lg:w-36 xl:w-40 xl:h-16">
          <div className=" flex-col justify-center flex my-auto ml-3 w-12 h-12 sm:w-10 sm:h-10 xl:w-12 xl:h-12 rounded-full bg-[#242424]">
            <div className="flex justify-center p-2">
              <Image src={globe} alt="globe" />
            </div>
          </div>
          <div className="text-[#242424] flex flex-col my-auto mx-auto font-medium text-[4vw] sm:text-[1.8vw] md:text-[1.5vw] lg:text-[1.2vw] xl:text-lg leading-6 sm:leading-4 lg:leading-5 xl:leading-6">
            <div className="mx-auto">Roots</div>
            <div>in India</div>
          </div>
        </div>
        </div>
      </div>
      <div className="flex w-screen justify-end">
        <div className="flex w-2/3 md:w-1/2 justify-end mb-10 mr-8 gap-2">
          <div className=" w-20 h-20 sm:w-14 sm:h-14 my-auto text-[#c9fd74]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-full h-full"
            >
              <path
                fillRule="evenodd"
                d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className=" w-full sm:w-2/3 lg:w-1/2 uppercase lg:font-medium text-[3vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1.15vw]">
            Bringing digital products to life: From design to code, crafting
            professional websites with a focus on superior UI/UX
          </div>
        </div>
      </div>
    </div>
  );
}
