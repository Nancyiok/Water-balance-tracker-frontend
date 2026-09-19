import { centerElementsOnPage } from "../index.module.scss";
import { useState } from "react";
import { useValidationMethodsForm } from "../../utils/FormValidationIntegrate";
import { schema } from "../../validations/signUpValidation";
import { FormProvider, useFormState } from "react-hook-form";
import ChooseRole from "../../componens/ChooseRole";
import SignUpForm from "../../componens/SignUpForm";
import ROUTES_PATH from "../../routes/routes.constants";
import AuthRedirectLink from "../../componens/AuthRedirectLink";
function SignUpPage() {
  const [data, setData] = useState(null);
  const methods = useValidationMethodsForm(schema);
  if (data) {
    return (
      <div className={centerElementsOnPage}>
        <ChooseRole receivedData={data} setData={setData} />
      </div>
    );
  }

  return (
    <div className={centerElementsOnPage}>
      <FormProvider {...methods}>
        <SignUpForm sendData={setData} />
      </FormProvider>
      <AuthRedirectLink
        route={ROUTES_PATH.loginPage}
        toPageName={"Login"}
        text={"Do you have an account?"}
      />
    </div>
  );
}
export default SignUpPage;
