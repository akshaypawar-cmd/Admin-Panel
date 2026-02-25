import * as  yup from "yup"

export const editProdctSchima = yup.object({
    title : yup 
    .string() 
    .required("Title is required")
    .min(3, "Title must be at least 3 characters"),

    description :yup 
    .string()
    .required("Description is required")
    .min(11, "Description must be ar least 11 characters"),

    price : yup 
    .number()
    .required("Price is required")
    .typeError("Price must be a number")
    .positive("Price must be greater than than 0"),

    category:yup 
    .string()
    .required("Category is required")
    .min(3,"Category must be at least 3 characters")
})
