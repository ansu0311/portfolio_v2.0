import Link from "next/link";
import styles from "./style.module.scss";
type Props = {
  link?: string;
  text: string;
};

export function ButtonDesign({ link, text }: Props) {
  return (
    <Link
      className={styles.buttonDesign}
      href={link ? link : ""}
      target="_self"
    >
      <button 
      className="bg-transparent border border-white outline-none px-4 pt-1 text-base sm:text-sm  lg:text-base 
  font-normal xl:font-medium xl:px-6 xl:text-lg overflow-hidden rounded-full
  after:absolute after:left-0 after:bottom-0 after:bg-[#c9fd74] after:w-full after:h-full "
      >
        <span
          className="my-auto relative inline-block overflow-hidden after:w-full after:h-full after:inline-block
   after:absolute after:left-1/2 after:bottom-0 after:z-10 after:text-[#242424]"
          data-text={text}
        >
          {text}
        </span>
      </button>
    </Link>
  );
}
type Props2 ={
  text: string;
  onClick: Function;
}
export function ButtonDesign2({ text ,onClick}: Props2) {
  return (
    <div
      className={styles.buttonDesign}
      onClick={()=>onClick()}
    >
      <button 
      className="bg-transparent border border-white outline-none px-4 pt-1 text-base sm:text-sm  lg:text-base 
  font-normal xl:font-medium xl:px-6 xl:text-lg overflow-hidden rounded-full
  after:absolute after:left-0 after:bottom-0 after:bg-[#c9fd74] after:w-full after:h-full "
      >
        <span
          className="my-auto relative inline-block overflow-hidden after:w-full after:h-full after:inline-block
   after:absolute after:left-1/2 after:bottom-0 after:z-10 after:text-[#242424]"
          data-text={text}
        >
          {text}
        </span>
      </button>
    </div>
  );
}