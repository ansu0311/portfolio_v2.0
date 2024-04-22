import Head from "next/head";
import { urlFor } from "@/sanity";
import dynamic from "next/dynamic";
import fetchSkills from "@/utils/fetchSkills";
import fetchPageInfo from "@/utils/fetchPageInfo";
import { GetStaticProps } from "next";
import { PageInfo, Skill } from "@/typings";
import {Curve} from '@/components/Curve/Curve'
import { ContactMe } from "@/components/ContactMe";
import { Body } from "@/components/AboutPage/About"
import Offerings from "@/components/AboutPage/Offerings";

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
}

function About({pageInfo,skills}: Props) {

  const numObjects = skills.length;
  const third = Math.floor(numObjects / 3); // Integer division for (almost) equal parts

  // Handle cases where the length of the data isn't perfectly divisible by 3
  const remainder = numObjects % 3;
  const firstPart = skills.slice(0, third);
  const secondPart = skills.slice(third, third * 2);
  const thirdPart = skills.slice(third * 2);

  // If there's a remainder, add the extra objects to the first two parts
  if (remainder >= 1) {
    firstPart.push(skills[third * 2]);
  }
  if (remainder >= 2) {
    secondPart.push(skills[third * 2 + 1]);
  }
  return (
      <>
      <Head>
        <title>Ansuman Nayak</title>
        <meta
          name="about section"
          content="Portfolio website for Ansuman Nayak"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Curve text='About'>
      <main className="heroed">
      <div
            className="z-10 overflow-scroll bg-transparent h-screen w-full text-white
       overflow-y-scroll overflow-x-hidden scrollbar-none"
          >
      <Body info={pageInfo.backgroundInformation} imgLink={urlFor(pageInfo.profileImage).url()}/>
      <Offerings/>
      <ContactMe pageInfo={pageInfo}/>
      </div>
      </main>
    </Curve>
  </>
  )
}
export default dynamic(() => Promise.resolve(About), { ssr: false });

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Skill[] = await fetchSkills();

  return {
    props: {
      pageInfo: pageInfo,
      skills: skills,
    },
    revalidate: 600,
  };
};