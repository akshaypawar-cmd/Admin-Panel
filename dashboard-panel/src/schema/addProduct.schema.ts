import * as yup from "yup"

import type { FormValues } from "@container"

export const addInputSchema =  yup.object<FormValues>({
  title:yup 
  .string()
  .required("Title is rquired")
   .min(3, "Title must be at least 3 characters"),

  description:yup 
  .string()
  .required("Description is reqired")
  .min(5, "Description must be at least 5 characters"),

  price:yup 
  .number() 
  .required("Price is required")
  .positive("Price must be greater than 0"),

  category:yup 
  .string()
  .required("Category is required"),

})
