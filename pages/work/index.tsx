import Head from "next/head";
import React from "react";
import { PageInfo,Project } from "@/typings";
import fetchPageInfo from "@/utils/fetchPageInfo";
import fetchProjects from "@/utils/fetchProjects";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import Header from '@/components/AboutPage/Header'
import { ContactMe } from "@/components/ContactMe";
import { Curve } from "@/components/Curve/Curve";
import {Body} from "@/components/WorkPage/Body";

type Props = {
  pageInfo: PageInfo;
  projects: Project[];
};

function Work({projects,pageInfo}: Props) {
  return (
    <>
      <Head>
        <title>Ansuman Nayak</title>
        <meta
          name="work section"
          content="Portfolio website for Ansuman Nayak"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Curve text="Work">
        <main>
          <div
            className="z-0 overflow-scroll bg-[#242424] h-screen w-full text-white
       overflow-y-scroll overflow-x-hidden scrollbar-none"
          >
      <Header name={pageInfo.name}/>
      <Body projects={projects}/>
      <ContactMe pageInfo={pageInfo}/>
          </div>
        </main>
      </Curve>
    </>
  );
}
export default dynamic(() => Promise.resolve(Work), { ssr: false });

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects: Project[] = await fetchProjects();
  const pageInfo: PageInfo = await fetchPageInfo();

  return {
    props: {
      pageInfo: pageInfo,
      projects: projects,
    },
    revalidate: 600,
  };
};
