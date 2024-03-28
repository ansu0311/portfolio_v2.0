import React from 'react'
import { About } from "@/components/About";
import { ContactMe } from "@/components/ContactMe";
import { ExperienceTab } from "@/components/ExperienceTab";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SkillTab } from "@/components/SkillTab";
import { ProjectTab } from "@/components/ProjectTab";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { GetStaticProps } from "next";
import fetchSkills from "@/utils/fetchSkills";
import fetchSocials from "@/utils/fetchSocials";
import fetchPageInfo from "@/utils/fetchPageInfo";
import fetchProjects from "@/utils/fetchProjects";
import fetchExperiences from '@/utils/fetchExperiences';
import Link from 'next/link';

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  socials: Social[];
};


function Home({ pageInfo, skills, experience, socials, projects }: Props) {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
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
      <main>
        <div
          className=" z-0 snap-y snap-mandatory overflow-scroll bg-slate-100 dark:bg-zinc-800 h-screen w-full text-zinc-700 dark:text-zinc-300
       overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-600/40 dark:scrollbar-track-gray-400/20 scrollbar-thumb-purple-500/60 dark:scrollbar-thumb-purple-500/40"
        >
          <Header socials={socials} />
          <section id="hero" className="snap-start">
            <Hero pageInfo={pageInfo} />
          </section>
          <section id="about" className="snap-center">
            <About pageInfo={pageInfo} />
          </section>
          <section id="skills" className="snap-center">
            <SkillTab skills={skills} />
          </section>
          <section id="projects" className="snap-center">
            <ProjectTab projects={projects} />
          </section>
          <section id="experience" className="snap-center">
            <ExperienceTab experience={experience} />
          </section>
          <section id="contactMe" className="snap-center">
            <ContactMe pageInfo={pageInfo} />
          </section>

          <Link href="#hero" scroll={false}>
            <footer className="sticky bottom-5 w-full cursor-pointer">
              <div className="flex items-center justify-center">
                <div
                  className="h-12 w-12 rounded-full filter grayscale
              hover:grayscale-0 cursor-pointer overflow-hidden text-purple-500/70 dark:text-purple-500/30"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-12 h-12"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </footer>
            </Link>
        </div>
      </main>
    </>
  );
}
export default dynamic(() => Promise.resolve(Home), { ssr: false });;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experience: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo: pageInfo,
      skills: skills,
      experience: experience,
      projects: projects,
      socials: socials,
    },
    revalidate: 600,
  };
};
