import { centerElementsOnPage } from "../index.module.scss";
import { useState } from "react";
import { useValidationMethodsForm } from "../../utils/FormValidationIntegrate";
import { schema } from "../../validations/signUpValidation";
import { FormProvider } from "react-hook-form";
import SignUpForm from "../../componens/SignUpForm";
import ROUTES_PATH from "../../../routes/routes.constants";
// import AuthRedirectLink from "../../componens/AuthRedirectLink";

export function SignUpPage() {
  const methods = useValidationMethodsForm(schema);

  return (
    <div className={centerElementsOnPage}>
      <FormProvider {...methods}>
        <SignUpForm />
      </FormProvider>
      <AuthRedirectLink
        route={ROUTES_PATH.loginPage}
        toPageName={"Login"}
        text={"Do you have an account?"}
      />
    </div>
  );
}
