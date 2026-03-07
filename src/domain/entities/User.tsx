export interface User {
  documento?: string;
  nombUsu: string;
  celular: string;
  password: string;
  rol: string;
  confirmPassword: string;
  session_token?: string;
}