export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}