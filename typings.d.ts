interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profileImage: Image;
    socials: Social[]
}

export interface Technology extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
    technology: boolean;
}

export interface Experience extends SanityBody {
    _type: "experiences";
    company: string;
    companyImage: Image;
    dateStarted: date;
    dateEnded: date;
    currentWorking:boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}

export interface Project extends SanityBody {
    _type: "project";
    title: string;
    Image: Image;
    dateStarted: date;
    dateEnded: date;
    currentWorking:boolean;
    summary: string;
    linkToBuild: string;
    technologies: Technology[];
    displayBoard: boolean;
    bgColor: string;
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
    image: Image;
 }