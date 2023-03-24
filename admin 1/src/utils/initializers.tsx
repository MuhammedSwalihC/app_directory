import {
  DepartmentInterface,
  loginInterface,
  registrationInterface,
  userInterface,
} from "./interfaces";

export const ragistrationValues: registrationInterface = {
  email: "",
  username: "",
  role: "",
};

export const loginValue: loginInterface = {
  email: "",
};

export const userinitialValue: userInterface = {
  email: "",
  module_id: NaN,
  domain_name: "",
};
export const departmentinitialValue: DepartmentInterface = {
  first_name: "",
  last_name: "",
  email_address: "",
  phone_number: "",
};
