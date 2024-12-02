export interface MenuItem {
  title: string;
  link: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Testimonial {
  name: string;
  position: string;
  image: string;
  text: string;
} 