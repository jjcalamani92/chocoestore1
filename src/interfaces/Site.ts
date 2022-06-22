import { ObjectId } from "mongoose";

export interface ISeo {
  category: SeoCategory;
  section: SeoSection;
  item: SeoItem;
}

export interface SeoCategory {
  name?: string;
  href?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
}
export interface SeoSection extends SeoCategory {}
export interface SeoItem extends SeoCategory {}

export interface Site {
  _id: string;
  title: string;
  domain: string;
  logo: string;
  numberPhone: string;
  description: string;
  address: string;
  type: string;
  categories: Category[];
  pages: Page[];
  status?: boolean;
}

export interface Category {
  _id: string;
  name: string;
  href?: string;
  description?: string;
  imageSrc: string;
  imageAlt?: string;
  featured: Featured[];
  sections: Section[];
}

export interface Featured {
  _id: string;
  category?: string;
  name: string;
  href: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export interface Section {
  _id: string;
  category?: string;
  section?: string;
  name: string;
  href?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  items: Item[];
}

export interface Item {
  _id: string;
  category?: string;
  section?: string;
  description?: string;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt?: string;
}

export interface Page {
  _id: string;
  category?: string;
  section?: string;
  name: string;
  href: string;
}
