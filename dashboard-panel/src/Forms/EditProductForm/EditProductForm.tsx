import type { FC } from "react";

import { useFormContext } from "react-hook-form";

import { FormInput } from "@components";
import type {  AddProductProps } from "../ProductAdd";
import type { FormValues } from "@container";

const EditProductForm: FC<AddProductProps> = (props) => {
  const { onClose, isPending } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();

  const titleRegister = register("title");
  const descriptionRegister = register("description");
  const categoryRegister = register("category");
  const priceRegister = register("price");

  return (
    <>
      <FormInput
        id="title"
        label="Title"
        type="text"
        register={titleRegister}
        error={errors.title}
      />

      <FormInput
        id="description"
        label="Description"
        type="text"
        register={descriptionRegister}
      />
      <FormInput
        id="category"
        label="Category"
        type="text"
        register={categoryRegister}
        error={errors.category}
      />

      <FormInput
        id="price"
        label="Price"
        type="number"
        register={priceRegister}
        error={errors.price}
      />

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
