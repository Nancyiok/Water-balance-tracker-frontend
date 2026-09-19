import Form from "../Form";
import PasswordInput from "../PasswordInput";
import FormInputValidation from "../FormInputValidation";
import { useFormContext } from "react-hook-form";
import { BUTTONS_VARIANTS } from "../Button/constants";
import { Button } from "../../primitives/Button";
import { SIGN_UP_VALIDATION_FIELDS } from "../../constants/forms/signUpValidationRules";
function SignUpForm({ sendData }) {
  const methods = useFormContext();
  const {
    formState: { isValid },
  } = methods;

  const submitForm = async () => {
    const formData = methods.getValues();
    sendData(formData);
  };

  return (
    <>
      <Form name="Signup" onSubmit={submitForm}>
        <FormInputValidation
          name={SIGN_UP_VALIDATION_FIELDS.email}
          type={SIGN_UP_VALIDATION_FIELDS.email}
          label={"Email"}
          placeholder={"Enter email"}
        />
        <PasswordInput
          name={SIGN_UP_VALIDATION_FIELDS.password}
          label={"Password"}
        />
        <PasswordInput
          name={SIGN_UP_VALIDATION_FIELDS.confirmPassword}
          label={"Confirm password"}
        />
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
