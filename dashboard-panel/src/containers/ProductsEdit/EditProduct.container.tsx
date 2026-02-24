import { FormProvider, useForm } from "react-hook-form";

import { useUpdateProduct } from "@api";
import type { FormValues, Props } from "./editProduct.types";
import { EditProductForm } from "@forms";

const EditProduct = ({ product, onClose }: Props) => {
  const { mutate: updateProduct, isPending } = useUpdateProduct();
  const methodes = useForm<FormValues>({ defaultValues: product });
  const { handleSubmit } = methodes;

  const onSubmit = (data: FormValues) => {
    updateProduct(
      { ...product, ...data },
      {
        onSuccess: () => {
          onClose();
        },
      },
    );
  };

  return (
    <div className="fixed inset-0 mt-10 flex items-center justify-center z-50 px-4">
      <div className="w-full max-w-md">
        <FormProvider {...methodes}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-2xl shadow-2xl p-8 space-y-6"
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">Edit Product</h2>
            </div>

            <EditProductForm onClose={onClose} isPending={isPending} />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default EditProduct;
