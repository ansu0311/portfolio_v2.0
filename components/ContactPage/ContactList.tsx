import { Social } from "@/typings";
import { SocialIcon } from "react-social-icons";

type Props = {
  title: string;
  list: string[];
};

export function ContactList({ title, list }: Props) {
  return (
    <ul className="text-white/70 flex flex-col w-full gap-[0.4rem] text-[0.9rem] sm:text-[0.7rem] lg:text-[0.8rem]">
      <div className=" text-[0.75rem] sm:text-[0.55rem] lg:text-[0.6rem] border-b pb-2 mb-2 border-[#c9fd74] text-[#c9fd74] font-semibold uppercase">
        {title}
      </div>
      {list.map((e, index) => (
        <li key={index}>{e}</li>
      ))}
    </ul>
  );
}

type Props2 = {
  title: string;
  socials: Social[];
};
export function SocialList({ title, socials }: Props2) {
  return (
    <ul className="text-white/70 flex flex-col w-full gap-[0.4rem] text-[0.9rem] sm:text-[0.7rem] lg:text-[0.8rem]">
      <div className="text-[0.75rem] sm:text-[0.55rem] lg:text-[0.6rem] border-b pb-2 mb-2 border-[#c9fd74] text-[#c9fd74] font-semibold uppercase">
        {title}
      </div>
      {socials.map((e) => (
        <div
          className="pl-1 opacity-70 gap-2 flex grayscale hover:opacity-100 hover:grayscale-0 hover:scale-110 transition-all duration-200 ease-in-out"
          key={e._id}
        >
          <SocialIcon
            style={{ width: "2.5rem", height: "2.5rem" }}
            url={e.url}
            label={e.title}
            bgColor="transparent"
            fgColor="#c9fd74"
          />
          <li className="my-auto">{e.title}</li>
        </div>
      ))}
    </ul>
  );
}
