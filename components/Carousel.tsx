import { urlFor } from "@/sanity";
import { Technology } from "@/typings";
import React from "react";

type Props = {
  sourceImg: string;
  index: number;
  activeIndex: number;
  title: string;
  summary: string;
  lengthArr: number;
  technologies: Technology[];
};

export default function Carousel({
  index,
  activeIndex,
  sourceImg,
  title,
  summary,
  technologies,
  lengthArr,
}: Props) {
  var stt = index - activeIndex;
  if (index < activeIndex) {
    var stt = -(index - activeIndex);
  }
  return (
    <div
      className=" absolute top-10 transition-all duration-500"
      style={
        index === activeIndex
          ? { opacity: "1", zIndex: `${lengthArr}` }
          : index > activeIndex
          ? {
              transform: `translate(${6 * stt}vw, 0px) scale(${
                1 - 0.15 * stt
              }) perspective(30px) rotateY(-1deg)`,
              zIndex: `${lengthArr - stt}`,
              filter: `blur(${5 * (0.7 * stt)}px)`,
              opacity: `${stt > 4 ? 0 : 0.2 * (4 - stt)}`,
            }
          : {
              transform: `translate(${-6 * stt}vw, 0px) scale(${
                1 - 0.15 * stt
              }) perspective(30px) rotateY(1deg)`,
              zIndex: `${lengthArr - stt}`,
              filter: `blur(${5 * (0.7 * stt)}px)`,
              opacity: `${stt > 4 ? 0 : 0.2 * (4 - stt)}`,
            }
      }
    >
      <div className="bg-slate-100 dark:bg-zinc-900/90 w-11/12 sm:w-9/12 h-[40rem] lg:h-[30rem] flex items-center rounded-[1.5rem] mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center p-10">
          <div className=" w-4/5 sm:w-3/5 lg:w-2/5 mr-0 lg:-mr-7 rounded-lg overflow-hidden">
            <img src={sourceImg} alt={"Carousel img" + index} />
          </div>
          <div className="bg-[#342C3F] w-full sm:w-4/5 lg:w-3/5 h-auto rounded-lg -mt-10 lg:-ml-7 p-4 lg:p-10 flex flex-col">
            <h1 className=" text-center lg:text-left text-2xl lg:text-2xl font-semibold pb-2">{title}</h1>

            <div className="flex justify-center space-x-2 my-2">
              {technologies.map((tech,index) => {
                return (
                  <div key={index} className=" flex items-center object-contain h-6 w-6 rounded-full">
                    <img src={urlFor(tech.image).url()} alt={tech.title} />
                  </div>
                );
              })}
            </div>
            <p className="text-md leading-5 lg:leading-none text-justify">
              {summary}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
