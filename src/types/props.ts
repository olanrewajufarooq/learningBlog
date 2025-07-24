export type SectionProps = {
  title?: string,
  subtitle?: string,
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