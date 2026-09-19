// import { useForm, UseFormReturn, DefaultValues } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
//
// export const useValidationMethodsForm = (
//     schema: ZodSchema,
//     defaultValues?: DefaultValues<z.infer<ZodSchema>>
// ): UseFormReturn<z.infer<ZodSchema>> => {
//     return useForm<z.infer<ZodSchema>>({
//         defaultValues,
//         mode: "onChange",
//         resolver: zodResolver(schema),
//     });
// };