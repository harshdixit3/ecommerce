export type Category = {
  _id: string;
  name: string;
  link: string;
  slug: string;
  image: string;
  createdAt?: string;
  submenu?: SubCategory[];
};
export type SubCategory = {
  _id: string;
  name: string;
  slug: string;
  link: string;
  parent?: string;
  createdAt?: string;
  updatedAt?: string;
};
export type Page = {
  _id: string;
  name: string;
  slug: string;
  link: string;
  createdAt?: string;
};
export type SubPage = {
  _id?: string;
  name: string;
  slug: string;
  link: string;
  parent?: string;
  createdAt?: string;
};
