"use client";
import { Project } from "@/typings";
import { useState } from "react";
import ProjectTemplate from "@/components/smallComponents/ProjectTemplate";
import Modal from "@/components/smallComponents/Modal";
import { TitleText4 } from "../smallComponents/TitleText";

type Props = {
  projects: Project[];
};

export function Body({ projects }: Props) {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className="mt-5 sm:mt-10 overflow-hidden max-w-6xl px-4 sm:px-8 xl:px-0 flex justify-center mx-auto">
      <div className=" w-full flex flex-col justify-center items-center ">
        <div className="flex justify-center sm:justify-start w-full py-16">
          <div className="flex flex-col">
            <div className="flex gap-3">
              <TitleText4 titles={["A mix of user-centric website "]} />
              <p className="text-[#c9fd74]">
                <TitleText4 titles={["designs"]} />
              </p>
            </div>
            <div className="flex gap-3 mx-auto sm:mx-0">
              <TitleText4 titles={["and"]} />
              <p className="text-[#c9fd74]">
                <TitleText4 titles={["functional "]} />
              </p>
              <TitleText4 titles={[" builds."]} />
            </div>
          </div>
        </div>
        <div className="w-11/12">
          {projects.map((project, index) => {
            return (
              <ProjectTemplate
                url={project.linkToBuild}
                index={index}
                title={project.title}
                setModal={setModal}
                key={index}
              />
            );
          })}
        </div>
        <Modal modal={modal} projects={projects} />
      </div>
    </main>
  );
}

// <Carousel
// key={index}
// index={index}
// activeIndex={activeIndex}
// sourceImg={urlFor(project.Image).url()}
// title={project.title}
// summary={project.summary}
// lengthArr={projects.length}
// technologies={project.technologies}
// />
