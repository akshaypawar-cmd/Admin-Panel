import * as yup from "yup";

export const addUserSchema = yup.object({
  firstname: yup
    .string()
    .required("firstname is required")
    .min(3, "minimum characters out of 3"),

  lastname: yup
    .string()
    .required("lastName is required")
    .min(3, "minimum characters out of 3"),

  email: yup
  .string() 
  .required("email is required"),

  phone: yup
    .string()
    .typeError("must be a number")
    .required("number is required")
   .matches(/^[0-9]{10}$/, "phone number must be 10 digits"),

  address: yup
  .string()
  .required("address is required"),
});
