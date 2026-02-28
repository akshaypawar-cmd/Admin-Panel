import * as yup from "yup";

export const addUserSchema = yup.object({
  firstname: yup
    .string()
    .required("firstName is required")
    .min(3, "minimum characters out of 3"),

  lastname: yup
    .string()
    .required("lastName is required")
    .min(3, "minimum characters out of 3"),

  email: yup
  .string() 
  .required("email is required"),

  city: yup
  .string()
  .required("city is required"),

  phone: yup
    .number()
    .required("number is required")
    .positive("number must be less than 0"),

  address: yup
  .string()
  .required("address is required"),
});
