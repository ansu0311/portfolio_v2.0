"use client";
import { Project } from "@/typings";
import {TitleText} from "./smallComponents/TitleText";
import { useState } from 'react';
import ProjectTemplate from "./smallComponents/ProjectTemplate";
import Modal from "./smallComponents/Modal";
import {ButtonDesign} from "./ButtonDesign/ButtonDesign";

type Props = {
  projects: Project[];
};

export function ProjectTab({ projects }: Props) {

  const [modal, setModal] = useState({active: false, index: 0})

  return (
      <main className="h-screen overflow-hidden max-w-6xl px-4 sm:px-8 xl:px-0 flex justify-center mx-auto">
        <div className=" w-full flex flex-col justify-center items-center py-10 ">
      <div className=" w-full items-start pb-10">
        <TitleText titles={["Projects"]}/>
        </div>
      <div className="w-11/12">
          {
          projects.map( (project, index) => {
            return <ProjectTemplate url={project.linkToBuild} index={index} title={project.title} setModal={setModal} key={index}/>
          })
          }
        </div>
        <div className=" pt-10"><ButtonDesign link="/work" text={"More"} /></div>
        <Modal modal={modal} projects={projects}/>
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