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

export interface Achievement {
  name: string;
  description: string[];
  stacks: string[];
}

export interface WorkExperience {
  backgroundColor?: string;
  borderColor?: string;
  company: string;
  badge?: Badge;
  position: string;
  description: string;
  location: string;
  achievements?: Achievement[];
}

export interface PersonalProject {
  backgroundColor?: string;
  borderColor?: string;
  name: string;
  badge?: Badge;
  description: string;
  websites?: string[];
  stacks?: string[];
}

export interface ResumeData {
  profile: Profile;
  education: Education[];
  skills: Skill[];
  workExperiences?: WorkExperience[];
  personalProjects?: PersonalProject[];
}
