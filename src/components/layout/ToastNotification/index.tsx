import { Icon } from "@iconify/react";
import { THEME, TOAST_VARIANTS } from "./constants";
import "./index.css";
import { type ToastNotificationProps } from "@/hooks/useToast/types";

export function ToastNotification({
  header,
  message,
  variant = TOAST_VARIANTS.warn,
}: ToastNotificationProps) {
  const theme = THEME[variant];

  return (
    <div
      className={`flex items-start gap-3 p-4 rounded-4xl border ${theme.modal}`}
    >
      <Icon
        icon={theme.icon}
        width={20}
        className={`shrink-0 ${theme.iconStyle}`}
      />
      <div className="flex flex-col gap-1">
        {header && (
          <p className="font-sans font-semibold text-neutral-900">{header}</p>
        )}
        <p className="font-sans text-neutral-500">{message}</p>
      </div>
    </div>
  );
}
