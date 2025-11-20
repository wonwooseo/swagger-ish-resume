export interface Education {
  school: string;
  degree: string;
  description: string;
  fieldOfStudy: string;
  gpa: string;
}

export interface Skill {
  name: string;
  category: string;
  description: string;
  level: string;
}

export interface WorkExperience {
  company: string;
  position: string;
  description: string;
  location?: string;
  startDate: string;
  endDate?: string;
}

export interface Project {
  name: string;
  category: string;
  description: string;
  startDate: string;
  endDate?: string;
  links?: string[];
  stacks?: string[];
}
