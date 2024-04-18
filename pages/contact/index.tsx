import Head from "next/head";
import React from "react";
import { PageInfo } from "@/typings";
import fetchPageInfo from "@/utils/fetchPageInfo";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/AboutPage/Header";
import { Curve } from "@/components/Curve/Curve";
import { Body } from "@/components/ContactPage/Body";
import { urlFor } from "@/sanity";
import ContactForm from "@/components/ContactPage/ContactForm";

type Props = {
  pageInfo: PageInfo;
};

function Contact({ pageInfo }: Props) {
  return (
    <>
      <Head>
        <title>Ansuman Nayak</title>
        <meta
          name="Contact section"
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
            <Header name={pageInfo.name} />
            <Body imageLink={urlFor(pageInfo.heroImage).url()} />
            <ContactForm pageInfo={pageInfo} />
          </div>
        </main>
      </Curve>
    </>
  );
}
export default dynamic(() => Promise.resolve(Contact), { ssr: false });

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();

  return {
    props: {
      pageInfo: pageInfo,
    },
    revalidate: 600,
  };
};
