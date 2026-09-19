import { useValidationMethodsForm } from "@/hooks/useValidationMethodsForm";
import { signUpSchema } from "@/validations/schemas/signUpValidation";
import { FormProvider } from "react-hook-form";
import { SignUpForm } from "@/components/features/SignUp/SignUpForm";
// import ROUTES_PATH from "../../../routes/routes.constants";
// import AuthRedirectLink from "../../componens/AuthRedirectLink";

export function SignUpPage() {
  const methods = useValidationMethodsForm(signUpSchema);

  return (
    <div className="">
      <FormProvider {...methods}>
        <SignUpForm />
      </FormProvider>
      {/* <AuthRedirectLink
        route={ROUTES_PATH.loginPage}
        toPageName={"Login"}
        text={"Do you have an account?"}
      /> */}
    </div>
  );
}
