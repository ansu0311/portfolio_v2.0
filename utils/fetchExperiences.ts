import { Experience } from "@/typings";
import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

const query = groq`
    *[_type == 'experiences'] {
      ...,
      technologies[]->
    }
`;

const fetchExperiences = async () => {
  const res = await sanityClient.fetch(query);
  const experience: Experience[] = await sanityClient.fetch(query);
  
  console.log("function"+experience);
  return experience;
};

export default fetchExperiences;
