import { useFormContext } from "react-hook-form";

import { FormInput } from "@components";
import type { ProductsResponse } from "@api";
import type { EditProductProps, ProductField } from "./editInutsFields.type";

const EditProductForm:React.FC<EditProductProps> = (props) => {
  const { onClose, isPending } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductsResponse>();

  const productFields: ProductField[] = [
    { name: "title", label: "Title", type: "text" },
    { name: "description", label: "Description", type: "text" },
    { name: "price", label: "Price", type: "number" },
    { name: "category", label: "Category", type: "text" },
  ];
  
  return (
    <>
      {productFields.map((field) => (
        <FormInput
          key={field.name}
          id={field.name}
          label={field.label}
          type={field.type}
          register={
            field.name === "price"
              ? register("price", { valueAsNumber: true })
              : register(field.name)
          }
          error={errors[field.name as keyof ProductsResponse]}
        />
      ))}

      <div className="flex gap-4 pt-2">
        <button
          type="button"
          onClick={onClose}
          className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-green-700 text-white py-2 rounded-lg "
        >
          {isPending ? "Updating..." : "Update Product"}
        </button>
      </div>
    </>
  );
};

export default EditProductForm;
