import type { FC } from "react";

import { useFormContext } from "react-hook-form";

import { FormInput } from "@components"
import type {  AddProductProps } from "./addProductForm.types";
import type { FormValues } from "@container";

const AddProductsInpusts:FC<AddProductProps> = (props) => {
  const { onClose,isPending } = props 
  const {register, formState: {errors}} = useFormContext <FormValues>()
 
  const titleRegister = register("title");
  const desRgister = register("description");
  const priceRgister = register("price");
  const categoryRegister = register("category");

  return (
   <>
    <FormInput
            id="title"
            label="Title"
            register={titleRegister}
            error={errors.title}
            placeholder="Enter your product title"
          />

          <FormInput
            id="description"
            label="Description"
            register={desRgister}
            error={errors.description}
            placeholder="Enter description"
          />

          <FormInput
            id="price"
            label="Pirce"
            type="number"
            register={priceRgister}
            error={errors.price}
            placeholder="Enter your Porduct price"
          />

          <FormInput
            id="category"
            label="Category"
            register={categoryRegister}
            error={errors.category}
            placeholder="Enter product category"
          />

          <div className="flex justify-between gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isPending}
              className="px-4 py-2 bg-green-500 text-white rounded-lg"
            >
              {isPending ? "Adding..." : "Add Product"}
            </button>
          </div>
   </>
  )
}

export default AddProductsInpusts
