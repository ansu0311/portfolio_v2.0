import { motion } from "framer-motion";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";
import PageHeading from "./PageHeading";

type Props = {
  pageInfo: PageInfo;
};

export function About({ pageInfo }: Props) {
  return (
    <PageHeading heading="About">
      <div className="flex flex-col md:grid md:grid-cols-10 lg:grid-cols-8 xl:grid-cols-6 gap-10">
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-4 md:col-start-2 lg:col-span-3 lg:col-start-2 xl:col-span-2 xl:col-start-2
           flex justify-center mt-10 md:mt-0 md:justify-end"
        >
          <img
            src={urlFor(pageInfo.profileImage).url()}
            alt="profile"
            className="flex-shrink-0 object-cover rounded-[1.5rem]
            h-auto w-1/2 md:w-10/12 xl:w-9/12"
          />
        </motion.div>
        <div className="md:col-span-4 lg:col-span-3 xl:col-span-2 flex flex-col px-10 md:pr-20 justify-center">
          <h4 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold pb-2">
            Here is a little Something{" "}
            <div className="text-purple-600/70 dark:text-purple-300/70"> About Me</div>
          </h4>
          <p className=" text-sm lg:text-sm xl:text-md text-justify">
            {pageInfo.backgroundInformation}
          </p>
        </div>
      </div>
    </PageHeading>
  );
}
