import { Skill } from "@/typings";
import axios from "axios";

async function fetchSkills(){
const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`)
    const data = await res.json();    
    const skills:Skill[ ] = data.skills;
        
        return skills;
}

export default fetchSkills;