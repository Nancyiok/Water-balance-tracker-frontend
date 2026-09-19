import {TOAST_VARIANTS} from "./constants";

export type ToastVariant = (typeof TOAST_VARIANTS)[keyof typeof TOAST_VARIANTS];

export interface ToastTheme {
    modal: string;
    icon: string;
    iconStyle: string;
}