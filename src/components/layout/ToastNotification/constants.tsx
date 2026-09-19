import { type ToastVariant, type ToastTheme } from "./types";

const TOAST_VARIANTS = {
  success: "success",
  error: "error",
  warn: "warn",
} as const;

const THEME: Record<ToastVariant, ToastTheme> = {
  [TOAST_VARIANTS.success]: {
    modal: "bg-success/10 border-success",
    icon: "lucide:check-circle",
    iconStyle: "text-success",
  },
  [TOAST_VARIANTS.error]: {
    modal: "bg-danger/10 border-danger",
    icon: "lucide:x-circle",
    iconStyle: "text-danger",
  },
  [TOAST_VARIANTS.warn]: {
    modal: "bg-warning/10 border-warning",
    icon: "lucide:alert-triangle",
    iconStyle: "text-warning",
  },
};

export { THEME, TOAST_VARIANTS };
