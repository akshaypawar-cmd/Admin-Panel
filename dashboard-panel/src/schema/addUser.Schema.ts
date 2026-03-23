import * as yup from "yup";

export const addUserSchema = yup.object({

  name:yup.object({
  firstname: yup
     .string()
     .required("first name is required")
     .min(3, "must be at least 3 characters"),

   lastname: yup
     .string()
     .required("last name is required")
     .min(3, "must be at least 3 characters")
  }),
  email: yup
  .string() 
  .required("email is required"),

  phone: yup
    .string()
    .typeError("must be a number")
    .required("number is required")
   .matches(/^[0-9]{10}$/, "phone number must be 10 digits"),

  address: yup.object({
    city: yup
      .string()
      .required("city is required")
  }),
});
