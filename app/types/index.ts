export interface Badge {
  text: string;
  color: string;
}

export interface Profile {
  name: string;
  badges?: Badge[];
  description: string;
  phone: string;
  email: string;
  location: string;
  websites: string[];
}

export interface Education {
  backgroundColor?: string;
  borderColor?: string;
  institution: string;
  badge?: Badge;
  description: string;
  degree: string;
  gpa: string;
}

export interface Skill {
  backgroundColor?: string;
  borderColor?: string;
  name: string;
  badge?: Badge;
  description: string;
}

export interface WorkExperience {
  backgroundColor?: string;
  borderColor?: string;
  company: string;
  badge?: Badge;
  position: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
}

export interface Project {
  backgroundColor?: string;
  borderColor?: string;
  name: string;
  badge?: Badge;
  description: string;
  startDate: string;
  endDate: string;
  websites?: string[];
  stacks?: string[];
}

export interface ResumeData {
  profile: Profile;
  education: Education[];
  skills: Skill[];
  workExperiences: WorkExperience[];
  projects: Project[];
}
