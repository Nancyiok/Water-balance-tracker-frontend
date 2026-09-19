import { useState } from "react";
import {FormInputValidation}
import ShowIcon from "./icons/show-password.svg?react";
import HideIcon from "./icons/hide-password.svg?react";
import Button from "../Button";
import { passwordContainer } from "./index.module.scss";
function PasswordInput({ name, label }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={passwordContainer}>
      <FormInputValidation
        name={name}
        type={showPassword ? "text" : "password"}
        label={label}
        placeholder={"Enter password"}
        rightIcon={
          <Button
            type="button"
            variant="withIcon"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <HideIcon /> : <ShowIcon />}
          </Button>
        }
      />
    </div>
  );
}

export default PasswordInput;
