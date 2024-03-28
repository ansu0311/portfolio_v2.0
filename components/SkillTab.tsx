import { SkillIcons } from "./SkillIcons";
import { Skill } from "@/typings";
import { urlFor } from "@/sanity";
import PageHeading from "./PageHeading";

type Props = {
  skills: Skill[];
};
export function SkillTab({ skills }: Props) {
  return (
    <PageHeading heading="Skills">
      <div className="grid grid-cols-4 gap-x-2 gap-y-8 md:gap-x-5 md:gap-y-5">
        {skills.map((e, index) => {
            return (
              <SkillIcons
                key={e._id}
                directionLeft={true}
                src={urlFor(e.image).url()}
                progress={e.progress}
                title={e.title}
              />
            );
          })
        }
      </div>
      <div className="z-5 w-full absolute top-[30%] bg-purple-500/30 dark:bg-purple-500/10 left-0 h-2/4 -skew-y-12"></div>
    </PageHeading>
  );
}
