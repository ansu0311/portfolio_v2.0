import { Project } from "@/typings";
import axios from "axios";

async function fetchProjects(){
const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`)
    const data = await res.json();    
    const projects:Project[ ] = data.projects;
        
        return projects;
}

export default fetchProjects;