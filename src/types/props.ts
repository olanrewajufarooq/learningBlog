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

export type DialogBoxProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  type?: 'success' | 'error' | 'info';
};