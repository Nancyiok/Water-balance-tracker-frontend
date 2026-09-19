import { useValidationMethodsForm } from "@/utils/FormValidationIntegrate";
import { schema } from "../../validations/loginValidation";
import { FormProvider, useFormState } from "react-hook-form";
import { centerElementsOnPage } from "../index.module.scss";
import LoginForm from "../../componens/LoginForm";
import AuthRedirectLink from "../../componens/AuthRedirectLink";
import ROUTES_PATH from "../../../routes/routes.constants";

function LoginPage() {
  const methods = useValidationMethodsForm(schema);
  return (
    <div className={centerElementsOnPage}>
      <FormProvider {...methods}>
        <LoginForm />
      </FormProvider>
      {/* <AuthRedirectLink
        route={ROUTES_PATH.main}
        toPageName={"Sign Up"}
        text={"Don't have an account?"}
      /> */}
    </div>
  );
}

export default LoginPage;
