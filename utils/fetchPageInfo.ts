import { PageInfo } from "@/typings";
import { groq } from "next-sanity"
import { sanityClient } from "@/sanity"

const query = groq`
*[_type == "pageInfo"][0]{
  ...,
  socials[]->
}
`;

const fetchPageInfo = async() => {
  const res = await sanityClient.fetch(query)
  const pageInfos: PageInfo = await sanityClient.fetch(query);
  return pageInfos;
}

export default fetchPageInfo;
