import { useState } from "react";
import { Button } from "../Button";


type Props = {
  name: string;
  label: string
}
function PasswordInput({ name, label }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
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
