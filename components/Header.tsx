import { motion } from "framer-motion";
import Link from "next/link";
import dp from "../public/dp.jpg";
import Image from "next/image";
import { Social } from "@/typings";
import { SocialIcon } from "react-social-icons";

type Props = {
  socials: Social[]
};

const iconSize = "w-7 h-7"

export function Header({socials}: Props) {
  
  return (
    <header className=" p-5 flex justify-between sticky top-0 items-start xl:items-center max-w-7xl mx-auto z-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex item-center"
      >
        {(socials !== null)?socials.map((e) => {
          return <SocialIcon url={e.url} key={e._id} fgColor="gray" bgColor=" transparent" />;
        }):<div>Loading</div>}
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex items-center"
      >
        <Link href="#contactMe">
          <div className="bg-transparent mr-2 cursor-pointer text-purple-500/40 grayscale hover:grayscale-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`${iconSize}`}
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
          </div>
        </Link>
        <div className="uppercase hidden md:inline-flex text-sm text-gray-400">
          get in touch
        </div>
      </motion.div>
    </header>
  );
}


// type SocialDetails = {
//   url: string;
//   name: string;
//   icon: any;
// };
// function SocialIcon(props: SocialDetails) {
//   return (
//     <Link href={props.url}>
//       <div
//         id={props.name}
//         className={`${iconSize} mr-3
//         bg-transparent cursor-pointer rounded-full object-cover overflow-hidden grayscale hover:grayscale-0`} 
//       >
//         <img src={props.icon} alt="icon" />
//       </div>
//     </Link>
//   );
// }
