import { Social } from "@/typings";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";

const query = groq`
    *[_type == 'social']
`;

async function fetchSocials() {
  const res = await sanityClient.fetch(query)
  const socials: Social[] = await sanityClient.fetch(query);
  return socials;
}

export default fetchSocials;
