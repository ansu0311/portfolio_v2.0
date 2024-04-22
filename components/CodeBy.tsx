"use client"
import Link from "next/link";
import styles from "./style.module.scss";
type Props = {
  coder: string;
  to: string;
};

export default function CodeBy({ to, coder }: Props) {
  const name = coder.split(" ");
  return (
    <div className="w-full flex px-5 sm:px-10 py-4 justify-between text-[#c9fd74]">
    <Link href={to}>
      <div className={styles.logo}>
        <p className={styles.copyright}>©</p>
        <div className={styles.name}>
          <p className={styles.codeBy}>Code by</p>
          <p className={styles.ansuman}>{name[0]}</p>
          <p className={styles.nayak}>{name[1]}</p>
        </div>
      </div>
    </Link>
    <div className="hidden md:flex gap-10 text-lg my-auto font-medium">
                <LinkNav name="work"/>
                <LinkNav name="about"/>
                <LinkNav name="Contact"/>
            </div>
    </div>
  );
}

function LinkNav({name}:{name:string}){
  return (
    <Link href={`/${name.toLowerCase()}`} className="el hover:text-white transition-all duration-300 flex flex-col cursor-pointer relative">
        <p className=" capitalize">{name}</p>
        <div className="indicator absolute bg-white rounded-full w-1 h-1 left-1/2 top-full"></div>
    </Link>)
}