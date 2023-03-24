export interface registrationInterface {
  email: string;
  username: string;
  role: string;
}

export interface loginInterface {
  email: string;
  password?: string;
}

export interface userInterface {
  email: string;
  role: string;
  username?: string;
}
export interface DepartmentInterface {
  first_name: string;
  last_name: string;
  email_address: string;
  phone_number: string;
}
