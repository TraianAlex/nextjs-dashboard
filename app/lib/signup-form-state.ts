export type SignupFormState = {
  error: string | null;
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export const initialSignupFormState: SignupFormState = {
  error: null,
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};
