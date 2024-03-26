import { Social } from "@/typings";
import axios from "axios";

async function fetchSocials(){
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)
    const data = await res.json();    
    const socials:Social[ ] = data.socials;
        
        return socials;
}

export default fetchSocials