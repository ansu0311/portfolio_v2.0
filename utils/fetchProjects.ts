import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Project } from "@/typings";

const query = groq`
*[_type == "project"]{
  ...,
  technologies[]->
}
`;

const fetchProjects = async () => {
  const res = await sanityClient.fetch(query);
  const projects: Project[] = await sanityClient.fetch(query);
  return projects;
};

export default fetchProjects;
