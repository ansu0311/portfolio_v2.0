import React from "react";
import { About } from "@/components/About";
import { ContactMe } from "@/components/ContactMe";
import { Hero } from "@/components/Hero";
import { ProjectTab } from "@/components/ProjectTab";
import dynamic from "next/dynamic";
import Head from "next/head";
import { PageInfo, Project, Skill } from "@/typings";
import { GetStaticProps } from "next";
import fetchPageInfo from "@/utils/fetchPageInfo";
import fetchProjects from "@/utils/fetchProjects";
import { Curve } from "@/components/Curve/Curve";
import { urlFor } from "@/sanity";
import fetchSkills from "@/utils/fetchSkills";

type Props = {
  pageInfo: PageInfo;
  projects: Project[];
  skills:Skill[];
};

function Home({ pageInfo, projects ,skills}: Props) {
  return (
    <>
      <Head>
        <title>Ansuman Nayak</title>
        <meta
          name="description"
          content="Portfolio website for Ansuman Nayak"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full overflow-x-hidden scrollbar-thin scrollbar-track-white/20 scrollbar-thumb-[#c9fd74]">
        <Curve text="Home">
          <main className="heroed">
            <div
              className="z-10 overflow-scroll h-auto w-full text-white
       overflow-y-scroll overflow-x-hidden scrollbar-none"
            >
              <section id="hero" className="snap-start">
                <Hero pageInfo={pageInfo} />
              </section>
              <section id="about" className="snap-center">
                <About skills={skills} imageLink={urlFor(pageInfo.heroImage).url()} />
              </section>
              <section id="projects" className="snap-center">
                <ProjectTab
                  projects={projects
                    .filter((e) => e.displayBoard === true)
                    .reverse()}
                />
              </section>
              <section id="contactMe" className="snap-center">
                <ContactMe pageInfo={pageInfo} />
              </section>
            </div>
          </main>
        </Curve>
      </div>
    </>
  );
}
export default dynamic(() => Promise.resolve(Home), { ssr: false });

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const projects: Project[] = await fetchProjects();
  const skills: Skill[] = await fetchSkills();

  return {
    props: {
      pageInfo: pageInfo,
      projects: projects,
      skills: skills,
    },
    revalidate: 600,
  };
};
