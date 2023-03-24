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
  module_id?: number;
  domain_name?: string;
  department_id?: number;
}
export interface DepartmentInterface {
  first_name: string;
  last_name: string;
  email_address: string;
  phone_number: string;
}
