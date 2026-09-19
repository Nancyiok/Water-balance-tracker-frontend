import classNames from "classnames";
import { Icon } from "@iconify/react";
import {
  type UseFormRegister,
  type FieldValues,
  type FieldError,
  type FieldErrorsImpl,
  type Merge,
} from "react-hook-form";

type Props = {
  name: string;
  label?: string | null;
  rightIcon?: string;
  leftIcon?: string;
  fieldError: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  registerFunc: UseFormRegister<FieldValues> | null;
};

const baseInputSpacing = "mt-2 w-full h-9 px-3 py-2";
const baseInputTypography = "text-sm tracking-normal leading-5";
const baseInputBorder = "border border-neutral-300 rounded-lg";
const baseInputStates = "placeholder:text-neutral-500 disabled:bg-neutral-100";
const baseInputStyles = `${baseInputSpacing} ${baseInputTypography} ${baseInputBorder} ${baseInputStates}`;

const incorrectBorder = "border-danger";
const errorLabel = "text-danger";

export const Input = ({
  name,
  label = null,
  rightIcon,
  leftIcon,
  fieldError,
  registerFunc = null,
}: Props) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={`${name}Input`}
          className={classNames("text-sm font-medium", {
            [errorLabel]: fieldError,
          })}
        >
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <Icon
            icon={leftIcon}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"
          />
        )}
        <input
          className={classNames(
            baseInputStyles,
            leftIcon && "pl-9",
            rightIcon && "pr-9",
            { [incorrectBorder]: fieldError },
          )}
          id={`${name}Input`}
          {...(registerFunc ? registerFunc(name) : {})}
        />
        {rightIcon && (
          <Icon
            icon={rightIcon}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500"
          />
        )}
      </div>
      {fieldError && (
        <p className="mt-1 text-sm text-danger">
          {fieldError.message as string}
        </p>
      )}
    </div>
  );
};
