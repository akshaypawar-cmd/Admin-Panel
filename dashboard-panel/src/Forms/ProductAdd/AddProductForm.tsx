import { useFormContext } from "react-hook-form";

import { FormInput } from "@components";
import type { AddProductProps,  } from "./addProductForm.types";
import type { ProductsResponse } from "@api";
import type { ProductField } from "../EditProductForm";

const AddProductsForm: React.FC<AddProductProps> = (props) => {
  const { onClose, isPending } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductsResponse>();

  const productsField: ProductField[] = [
    { name: "title", label: "Title", type: "text" },
    { name: "description", label: "Description", type: "text" },
    { name: "price", label: "Price", type: "number" },
    { name: "category", label: "Category", type: "text" },
  ];

  return (
    <>
      {productsField.map((field) => (
        <FormInput
          key={field.name}
          id={field.name}
          label={field.label}
          register={
            field.name === "price"
              ? register("price", { valueAsNumber: true })
              : register(field.name)
          }
          error={errors[field.name as keyof ProductsResponse]}
        />
      ))}
      <div className="flex justify-between gap-3">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg cursor-pointer"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={isPending}
          className="px-4 py-2 bg-green-500 text-white rounded-lg cursor-pointer"
        >
          {isPending ? "Adding..." : "Add Product"}
        </button>
      </div>
    </>
  );
};

export default AddProductsForm;
