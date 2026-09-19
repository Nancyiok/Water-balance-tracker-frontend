import classNames from "classnames";
import ErrorMessage from "../ErrorMessage";
import { useFormContext } from "react-hook-form";

function FormInputValidation({
  name,
  type,
  label,
  placeholder,
  rightIcon,
  isReadOnly = false,
}) {

  const useFormResult = useFormContext();
  const register = useFormResult.register;
  const errors = useFormResult.formState?.errors || {};

  return (
    <div>
      {label && (
        <label
          htmlFor={`${name}Input`}
          className={classNames({ ['']: errors[name] })}
        >
          {label}
        </label>
      )}
      <div className=''>
        <input
          type={type}
          className={classNames('', { ['']: errors[name] })}
          placeholder={placeholder}
          id={`${name}Input`}
          {...register(name)}
          disabled={isReadOnly}
        />
        {rightIcon && <div className={iconRight}>{rightIcon}</div>}
      </div>
      <ErrorMessage err={errors[name]} />
    </div>
  );
}

export default FormInputValidation;
