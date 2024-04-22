"use client";
import { PageInfo } from "@/typings";
import { useCallback, useEffect, useState } from "react";
import { GradiantObject } from "./Gradiant/GradiantObject";
import { TitleText } from "./smallComponents/TitleText";

type Props = {
  pageInfo: PageInfo;
};
export function Hero({ pageInfo }: Props) {
  const [isVisible, setIsVisible] = useState(true);

  const onScroll = useCallback((event: any) => {
    const { scrollY } = window;
    //scroll amount to hide the div
    const threshold = 150
    if (scrollY > threshold) {
      // Scrolling down, hide the div
      setIsVisible(false);
    }
    else if (scrollY < threshold) {
      // Scrolling up, show the div
      setIsVisible(true);
    }
    console.log("scrollY", scrollY);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className=" relative text-white bg-transparent w-full h-auto sm:h-screen flex flex-col justify-between pt-5">
      <div className="flex relative flex-col sm:flex-row sm:justify-between mt-10">
        <div className="flex flex-col pl-4 sm:pl-8 gap-10 sm:gap-0 text-[#c9fd74]">
          <div className="hidden md:block absolute left-[30vw] text-[#242424] -top-28 lg:-top-40 w-auto"><GradiantObject/></div>
          <div className="block md:hidden"><TitleText titles={["BUILDING","EXPERIENCE","THAT MATTERS"]}/></div>
        </div>
        <div className=" relative flex justify-center items-center z-10 h-40 w-40 right-6">
          <div className=" top-48 sm:top-[80vh] sm:right-[45vw] -right-0 w-48 h-40 sm:w-56 sm:h-48 yellow bg-[#db8401]/50 blob movement"></div>
          <div className=" top-40 sm:top-[80vh] sm:right-[45vw] -right-10 w-52 h-40 sm:w-60 sm:h-46 red bg-[#c7057d]/70 blob movement"></div>
          <div className=" top-52 sm:top-[80vh] sm:right-[45vw] right-0 w-48 h-40 sm:w-56 sm:h-48 green bg-[#5f9c02]/60 blob movement"></div>
        </div>
        <div></div>
      </div>
      <div className="flex w-screen mt-5 justify-end mb-10">
        <div className="flex flex-col items-end">
          <div className="flex w-2/3 md:w-2/3 justify-end mr-8 gap-2">
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
      <div className={"w-full h-10 hidden md:block absolute bottom-2 showOut"}>
        <div className={isVisible?"showOut":"hideOut"}>
        <div className={"border-2 border-white/50 w-5 h-7 lg:w-6 lg:h-9 mx-auto rounded-full "}>
          <div className="scroller w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full bg-white/40 mx-auto mt-2"></div>
        </div>
        </div>
      </div>
    </div>
  );
}
