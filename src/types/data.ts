import { type date } from "@customtypes/utils";

export type dataContainer = {
  education: dataEducation[];
  work: dataWork[];
  mooc: dataMOOC[];
  project: dataProject[];
  skills: dataSkills[];
};

export type dataEducation = {
  school: string;
  degree: string;
  course: string;
  start: date;
  end: date;
};

export type dataWork = {
  company: string;
  title: string;
  start: date;
  end: date;
  description?: string;
  skills?: string[];
};

export type dataMOOC = {
  platform: string;
  course: string;
  institute: string;
  start: date;
  end: date;
  skills?: string[];
};

export type dataProject = {
  title: string;
  client: string;
  company: string;
  description: string;
  start: date;
  end: date;
  skills?: string[];
};

export type dataSkills = {
  name: string;
};

export type dataBaseDateType = {
  startmonth: number;
  startyear: number;
  endmonth: number;
  endyear: number;
}

type dataBaseExtraType = {
  id: number;
  created_at: string;
  skills: string;
}

export type dbEducation = Omit<dataEducation, "start" | "end"> & dataBaseDateType & Omit<dataBaseExtraType, "skills">;
export type dbWork = Omit<dataWork, "start" | "end" | "skills"> & dataBaseDateType & dataBaseExtraType;
export type dbMOOC = Omit<dataMOOC, "start" | "end" | "skills"> & dataBaseDateType & dataBaseExtraType;
export type dbProject = Omit<dataProject, "start" | "end" | "skills"> & dataBaseDateType & dataBaseExtraType;

export type dataBaseContainerType = {
  education: dbEducation[];
  workExperience: dbWork[];
  onlineCourses: dbMOOC[];
  projects: dbProject[];
  skills: dataSkills[];
};

export type dataAll =
  | dataEducation[]
  | dataWork[]
  | dataMOOC[]
  | dataProject[];

export type dbAll =
  | dbEducation[]
  | dbWork[]
  | dbMOOC[]
  | dbProject[];