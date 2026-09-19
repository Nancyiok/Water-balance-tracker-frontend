import { Form } from "@/components/primitives/Form";
import PasswordInput from "@/components/primitives/Input/PasswordInput";
import FormInputValidation from "@/validations/FormInputValidation";
import { useFormContext } from "react-hook-form";
import { Button } from "@/components/primitives/Button";
import { SIGN_UP_VALIDATION_FIELDS } from "@/validations/constants/signUpValidationRules";

export function SignUpForm() {
  const methods = useFormContext();
  const {
    formState: { isValid },
  } = methods;

  const submitForm = async () => {
    const formData = methods.getValues();
  };

  return (
    <>
      <Form header="Signup" onSubmit={submitForm}>
        <FormInputValidation
          name={SIGN_UP_VALIDATION_FIELDS.email}
          type={SIGN_UP_VALIDATION_FIELDS.email}
          label={"Email"}
          placeholder={"Enter email"}
        />
        {/* <PasswordInput
          name={SIGN_UP_VALIDATION_FIELDS.password}
          label={"Password"}
        />
        <PasswordInput
          name={SIGN_UP_VALIDATION_FIELDS.confirmPassword}
          label={"Confirm password"}
        /> */}
        <Button
          type="submit"
          disabled={!isValid}
        >
          SignUp
        </Button>
      </Form>
    </>
  );
}

export default SignUpForm;
