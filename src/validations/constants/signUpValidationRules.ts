const PASSWORD_REGEX = {
  lower: /[a-z]+/,
  upper: /[A-Z]+/,
  digit: /\d+/,
};

const SIGN_UP_VALIDATION_FIELDS = {
  email: "email",
  password: "password",
  confirmPassword: "confirmPassword",
};

const MIN_PASSWORD_LENGTH = 8;

const EMAIL_RULES = {
  required: "Email is required",
  incorrect: "Invalid email",
};

const PASSWORD_RULES = {
  required: "Password is required",
  min: `Password must be at least ${MIN_PASSWORD_LENGTH} characters`,
  lower: "Must contain at least one lowercase character",
  upper: "Must contain at least one uppercase character",
  digit: "Must contain at least one number",
};

const CONFIRM_PASSWORD = {
  matchingWithField : "password",
  required: "Confirm password is required",
  matching: "Passwords must match",
};

export {
  EMAIL_RULES,
  PASSWORD_RULES,
  PASSWORD_REGEX,
  MIN_PASSWORD_LENGTH,
  CONFIRM_PASSWORD,
  SIGN_UP_VALIDATION_FIELDS,
};
