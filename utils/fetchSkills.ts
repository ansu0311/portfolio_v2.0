import { Skill } from "@/typings";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";

const query = groq`
    *[_type == 'skill']
`;

const fetchSkills = async() => {
  const res = await sanityClient.fetch(query)
  const skills: Skill[] = await sanityClient.fetch(query);
  return skills;
}

export default fetchSkills;
