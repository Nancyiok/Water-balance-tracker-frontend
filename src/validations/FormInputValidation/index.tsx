import { useFormContext } from "react-hook-form";
import { Input } from "../../components/primitives/Input";

type Props = {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  rightIcon?: string;
  leftIcon?: string;
  isReadOnly?: boolean;
  disabled?: boolean;
};

export function FormInputValidation({ name, ...props }: Props) {
  const { register, formState } = useFormContext();
  const fieldError = formState.errors?.[name];

  return (
    <Input
      name={name}
      registerFunc={register}
      fieldError={fieldError}
      {...props}
    />
  );
}

export default FormInputValidation;
