export interface ExperienceDetails {
  year: string;
  company: string;
  is_internship: boolean;
  link: string;
  experience: string[];
  skills: string[];
  achievements?: string[];
}

export interface PublicationDetail {
  heading: string;
  link: string;
  summary: string;
  thumbnail: string;
}

export interface ProjectDetails {
  heading: string;
  link: string;
  desc: string
  thumbnail: string
}
