import * as yup from "yup";

export const addUserSchema = yup.object({
  firstname: yup
    .string()
    .required("FirstName is required")
    .min(3, "minimum characters out of 3"),

  lastname: yup
    .string()
    .required("LastName is required")
    .min(3, "minimum characters out of 3"),

    email:yup 
    .string()
    .required("Email id is required"),
    
  phone: yup
    .number()
    .required("Number is required")
    .positive("number must be less than 0"),

  address: yup
  .string()
  .required("address is required"),

  city:yup 
  .string()
  .required("City is required"),
  
});
