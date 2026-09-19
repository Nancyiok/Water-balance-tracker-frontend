import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const useValidationMethodsForm = (schema, defaultValues = {}) => {
  return useForm({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(schema),
  });
};
