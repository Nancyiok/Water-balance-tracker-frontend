import Form from "../../componens/Form/";
import PasswordInput from "../PasswordInput";
import FormInputValidation from "../FormInputValidation";
import { login, passVerification } from "../../services/auth/auth.service";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import ROUTES_PATH from "../../routes/routes.constants";
import { BUTTONS_VARIANTS } from "../Button/constants";
import Button from "../Button";
import { successToast } from "../../utils/notifier";
import { useEffect } from "react";
import { LOGIN_FIELS_VALIDATION } from "../../constants/forms/logInValidationRules";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const methods = useFormContext();
  const {
    formState: { isValid, isSubmitting },
    setError,
    clearErrors,
    watch,
  } = methods;

  const [email, password] = watch([
    LOGIN_FIELS_VALIDATION.email,
    LOGIN_FIELS_VALIDATION.password,
  ]);

  useEffect(() => {
    clearErrors(LOGIN_FIELS_VALIDATION.submit);
  }, [email, password, clearErrors]);

  const submitForm = async (data) => {
    try {
      const { email, password } = data;
      const result = await login(email, password);
      const userInfo = result.data.user;
      if (!userInfo.isVerified) {
        const passUserVerification = await passVerification();
      }
      dispatch(changeInfo(userInfo));
      successToast("You have logged in successfully!");
      navigate(ROUTES_PATH.dashboard, { replace: true });
    } catch (err) {
      setError(LOGIN_FIELS_VALIDATION.submit);
    }
  };

  return (
    <>
      <Form name="Login" onSubmit={submitForm}>
        <FormInputValidation
          name={LOGIN_FIELS_VALIDATION.email}
          type={LOGIN_FIELS_VALIDATION.email}
          label="Email"
          placeholder={"Enter email"}
        />
        <PasswordInput
          name={LOGIN_FIELS_VALIDATION.password}
          label={"Password"}
        />
        <Button
          type={LOGIN_FIELS_VALIDATION.submit}
          variant={BUTTONS_VARIANTS.default}
          disabled={!isValid || isSubmitting}
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>
      </Form>
    </>
  );
}

export default LoginForm;
