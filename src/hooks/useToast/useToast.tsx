import { toast } from "react-toastify";
import { ToastNotification } from "../../layout/ToastNotification";
import { TOAST_VARIANTS } from "../../layout/ToastNotification/constants";
import { type ToastNotificationProps } from "./types";

const notify = ({
  header = "",
  message = "",
  variant = TOAST_VARIANTS.warn,
}: ToastNotificationProps) => {
  toast(<ToastNotification header={header} message={message} variant={variant} />);
};

const successToast = (header = "", message = "") =>
  notify(header, message, TOAST_VARIANTS.success);

const errorToast = (header = "", message = "") =>
  notify(header, message, TOAST_VARIANTS.error);

const warnToast = (header = "", message = "") =>
  notify(header, message, TOAST_VARIANTS.warn);

export { successToast, errorToast, warnToast };
