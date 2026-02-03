import * as  yup from "yup"

export const schema = yup.object({
     username: yup 
     .string()
     .required("name is required")
     .matches(/^[A-Z].*/, "First character must be a capital letter")
     .min(3,"minimum characters out of 3")
     .max(15,"maximum characters less than 15"),

     password: yup 
     .string()
     .required("password is required")
     .min(6,"password must be at least 6 characters")
     .max(15,"Password must be at most 15 characters")
})
