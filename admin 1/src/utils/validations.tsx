export const contactsValidation = {
  contact_title: { required: true },
  contact_status: { required: true },
  contact_source: { required: true },
  contact_person_name: { maxLength: 50, required: true },
  company_name: {
    maxLength: 100,
    required: true,
  },
  website: {
    pattern: {
      regex:
        /^(http\:\/\/|https\:\/\/)?([a-z0-9][a-z0-9\-]*\.)+[a-z0-9][a-z0-9\-]*$/,
      message: "Enter a Valid web address",
    },
  },
  primary_email: {
    pattern: {
      regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/,
      message: "Enter a Valid Email",
    },
    required: true,
  },
  mobile: {
    maxLength: 20,
    required: true,
    minLength: 5,
    pattern: { regex: /^[0-9]*$/, message: "Enter a Valid Mobile" },
  },
  phone: {
    maxLength: 20,
    required: true,
    minLength: 5,
    pattern: { regex: /^[0-9]*$/, message: "Enter a Valid Phone" },
  },
  state: { maxLength: 100 },
  city: { maxLength: 100 },
  company_linkedin: { maxLength: 100 },
  country: { maxLength: 100 },
  notes: { maxLength: 200 },
  description: { maxLength: 200 },
};

export const leadsValidation = {
  lead_owner_id: { required: true },
  lead_title: {
    maxLength: 100,
    // pattern: { message: "Enter Valid Title" },
  },
  lead_source: { required: true },
  lead_status: { required: true },
  contact_channel: { required: true },
  industry: { required: true },
  employee_strength: { minNum: 1 },
  description: { maxLength: 500 },
};

export const leadsContactValidation = {
  contact_source: { required: true },
  company_name: { required: true },
  contact_title: { required: true },
  contact_person_name: { maxLength: 100 },
  primary_email: {
    pattern: {
      regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/,
      message: "Enter a Valid Email",
    },
    required: true,
  },
  mobile: {
    maxLength: 20,
    required: true,
    minLength: 5,
    pattern: { regex: /^[0-9]*$/, message: "Enter a Valid Mobile" },
  },
  country: { maxLength: 100 },
};

export const accountsValidation = {
  description: { maxLength: 200 },
  account_name: { required: true, maxLength: 50 },
};

export const accounstLeadValidation = {
  lead_source: { required: true },
};

export const accountsContactValidation = {
  contact_person_name: { required: true },
  contact_title: { required: true },
  primary_email: {
    pattern: {
      regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/,
      message: "Enter a Valid Email",
    },
    required: true,
  },
  secondary_email: {
    pattern: {
      regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/,
      message: "Enter a Valid Email",
    },
    required: true,
  },
  mobile: {
    maxLength: 20,
    required: true,
    minLength: 5,
    pattern: { regex: /^[0-9]*$/, message: "Enter a Valid Mobile" },
  },
  phone: {
    maxLength: 20,
    required: true,
    minLength: 5,
    pattern: { regex: /^[0-9]*$/, message: "Enter a Valid Mobile" },
  },
  other_phone: {
    maxLength: 20,
    required: true,
    minLength: 5,
    pattern: { regex: /^[0-9]*$/, message: "Enter a Valid Mobile" },
  },
  assistant: { maxLength: 50 },
  asst_phone: {
    maxLength: 20,
    required: true,
    minLength: 5,
    pattern: { regex: /^[0-9]*$/, message: "Enter a Valid Mobile" },
  },
  department: { maxLength: 50 },
  home_phone: {
    maxLength: 20,
    required: true,
    minLength: 5,
    pattern: { regex: /^[0-9]*$/, message: "Enter a Valid Mobile" },
  },
  fax: { maxLength: 50 },
  skype_id: { maxLength: 100 },
  twitter: { maxLength: 100 },
  reporting_to: { maxLength: 100 },
};
