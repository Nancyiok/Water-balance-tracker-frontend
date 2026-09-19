import * as z from "zod";
import {
  EMAIL_RULES,
  PASSWORD_RULES,
  MIN_PASSWORD_LENGTH,
  MAX_EMAIL_LENGTH,
} from "@/validations/constants/logInValidationRules";

export const logInSchema = z.object({
  email: z
    .email(EMAIL_RULES.incorrect)
    .min(1, EMAIL_RULES.required)
    .max(MAX_EMAIL_LENGTH, EMAIL_RULES.max),
  password: z
    .string()
    .min(MIN_PASSWORD_LENGTH, PASSWORD_RULES.min)
});
