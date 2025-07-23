import type {
  dataEducation,
  dataWork,
  dataMOOC,
  dataProject,
} from "@customtypes/data";

export type ProfileSectionProps = {
  title: string,
  children: React.ReactNode;
};

export type ProfileCardProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  date?: string;
  skills?: string[];
  children?: React.ReactNode;
};

export type ProfileCardEducationProps = dataEducation;
export type ProfileCardWorkProps = dataWork;
export type ProfileCardMOOCProps = dataMOOC;
export type ProfileCardProjectProps = dataProject;

export type ProfileCardAboutProps = {
  children?: React.ReactNode;
};