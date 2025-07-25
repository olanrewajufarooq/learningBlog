export type date = {
  month: number,
  year: number
};

export type StartIndex = {
  education: number;
  work: number;
  mooc: number;
  project: number;
};

export type ShowButtons = {
  education: boolean;
  work: boolean;
  mooc: boolean;
  project: boolean;
};

export type FormikActions = {
  setSubmitting: ( isSubmitting: boolean ) => void;
  setErrors: ( errors: Record<string, string> ) => void;
  resetForm: () => void;
};
