export type Service = {
  id: number;
  title: string;
  description: string;
  st1: string[];
  st2: string[];
  st3?: string[];
  bgc: string;
  bgl: string;
};

export type navLink = {
  key: number;
  title: string;
  url: string;
};

export type Tools = {
  title: string;
  list: string[];
};

export type Project = {
  id: number;
  title: string;
  st1: string[];
  st2: string[];
  st3?: string[];
  imgUrl: string;
  imgUrlHover?: string;
};
