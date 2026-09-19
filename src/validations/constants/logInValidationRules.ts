const MIN_PASSWORD_LENGTH = 8;
const MAX_EMAIL_LENGTH = 70;

const LOGIN_FIELS_VALIDATION = {
  email: "email",
  password: "password",
  submit: "submit"
};

const EMAIL_RULES = {
  required: "Email is required",
  incorrect: "Invalid email",
  max: `Email must be less than ${MAX_EMAIL_LENGTH} characters`,
};

const PASSWORD_RULES = {
  min: `Password must be at least ${MIN_PASSWORD_LENGTH} characters`,
};

export {
  EMAIL_RULES,
  PASSWORD_RULES,
  MIN_PASSWORD_LENGTH,
  MAX_EMAIL_LENGTH,
  LOGIN_FIELS_VALIDATION,
};
