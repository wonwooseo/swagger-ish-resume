export interface Education {
  institution: string;
  location: string;
  degree: string;
  gpa: string;
}

export interface Skill {
  category: string;
  list: string[];
}

export interface Achievement {
  name: string;
  descriptions: string[];
}

export interface Work {
  company: string;
  position: string;
  description: string;
  location: string;
  achievements?: Achievement[];
}

export interface Project {
  name: string;
  description: string;
  websites?: string[];
}

export interface Badge {
  text: string;
  color: string;
}

export interface Contact {
  phone: string;
  email: string;
}

export interface ResumeData {
  title: string;
  badges?: Badge[];
  summary: string;
  contact: Contact;
  location: string;
  websites?: string[];
  education?: Education[];
  skill?: Skill[];
  work?: Work[];
  project?: Project[];
}
