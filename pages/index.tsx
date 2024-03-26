import { About } from "@/components/About";
import { ContactMe } from "@/components/ContactMe";
import { ExperienceTab } from "@/components/ExperienceTab";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectTab } from "@/components/ProjectTab";
import { SkillTab } from "@/components/SkillTab";
import dp from "../public/dp.jpg"
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { GetStaticProps } from "next";
import  fetchExperiences  from "@/utils/fetchExperiences";
import  fetchSkills  from "@/utils/fetchSkills";
import  fetchSocials  from "@/utils/fetchSocials";
import fetchPageInfo from "@/utils/fetchPageInfo";
import fetchProjects from "@/utils/fetchProjects";

type Props = {
  pageInfo: PageInfo[],
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  socials : Social[];
}

function Home ( {pageInfo, skills, experience,socials, projects}:Props ) {
  return (
    <>
      <Head>
        <title>Ansuman Nayak</title>
        <meta name="description" content="Portfolio website for Ansuman Nayak" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <div className=" z-0 snap-y snap-mandatory overflow-scroll bg-slate-100 dark:bg-zinc-800 h-screen w-full dark:text-zinc-300
       overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-purple-500/40">
        <Header socials={socials}/>
        <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo}/>
        </section>
        <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
        </section>
        <section id="skills" className="snap-center">
        <SkillTab skills={skills}/>
        </section>
        <section id="project" className="snap-center">
        <ProjectTab projects={projects}/>
        </section>
        <section id="experience" className="snap-center">
        <ExperienceTab experience={experience}/>
        </section>
        <section id="contactMe" className="snap-center">
        <ContactMe pageInfo={pageInfo}/>
        </section>

        <Link href="#hero">
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex items-center justify-center">
              <div className="h-10 w-10 rounded-full filter grayscale
              hover:grayscale-0 cursor-pointer overflow-hidden">
                <Image src={dp} alt="asc" />
                </div>
            </div>
          </footer>
        </Link>
        </div>
        </main>
    </>
  );
}
export default  Home

export const getStaticProps: GetStaticProps<Props> = async () =>{

  const pageInfo: PageInfo[] = await  fetchPageInfo();
  const experience: Experience[] = await  fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects:Project[] = await fetchProjects();
  const socials:Social[] = await fetchSocials();
  
  return {
    props:{
    pageInfo: pageInfo,
      skills: skills,
      experience : experience,
      projects: projects,
      socials: socials,
    },
    revalidate:60000,
  }
}
