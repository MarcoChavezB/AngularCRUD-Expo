// interfaz de usuarios

export interface UserInterface {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    created_at: string;
    updated_at: string;
}

export interface UserRegistrationInterface{
  name: string;
  email: string;
  password: string;
}

export interface UserLogin{
  email: string;
  password: string;
}

export interface LoginResponseInterface {
  msg: string;
  data: UserInterface;
  jwt: string;
  token_type: string;
}

export interface UserUpdateInterface {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface statusInterface {
  status: boolean
}
