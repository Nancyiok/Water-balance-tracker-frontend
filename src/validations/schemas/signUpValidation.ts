import * as z from "zod";
import {
  EMAIL_RULES,
  PASSWORD_RULES,
  PASSWORD_REGEX,
  MIN_PASSWORD_LENGTH,
  CONFIRM_PASSWORD,
  SIGN_UP_VALIDATION_FIELDS,
} from "@/validations/constants/signUpValidationRules";

export const signUpSchema = z
  .object({
    email: z.email(EMAIL_RULES.incorrect).min(1, EMAIL_RULES.required),
    password: z
      .string()
      .min(MIN_PASSWORD_LENGTH, PASSWORD_RULES.min)
      .regex(PASSWORD_REGEX.lower, PASSWORD_RULES.lower)
      .regex(PASSWORD_REGEX.upper, PASSWORD_RULES.upper)
      .regex(PASSWORD_REGEX.digit, PASSWORD_RULES.digit),
    confirmPassword: z.string().min(MIN_PASSWORD_LENGTH, PASSWORD_RULES.min),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: CONFIRM_PASSWORD.matching,
    path: [SIGN_UP_VALIDATION_FIELDS.confirmPassword],
  });
