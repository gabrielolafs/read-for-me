export interface SignupPayload {
  username: string;
  name: string;
  password: string;
  email: string;
  confirmPassword: string;
  securityQuestion: string;
  securityAnswer: string;
}

export interface LoginPayload {
  username: string;
  password: string;
}

export interface ResetPayload {
  username: string;
  securityAnswer: string;
  newPassword: string;
  confirmPassword: string;
}
