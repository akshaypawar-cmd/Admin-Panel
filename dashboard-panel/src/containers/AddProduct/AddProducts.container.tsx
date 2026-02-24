import { FormProvider, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { useAddProducts } from "@api";
import type { ProductsResponse } from "@api";
import { AddProductsInpusts, type AddProductProps } from "@forms";

import { addInputSchema } from "@schema";

type FormValues = Omit<ProductsResponse, "id">;

const AddProduct = ({ onClose }: AddProductProps) => {
  const methods = useForm<FormValues>({ 
    resolver: yupResolver(addInputSchema),
    mode:"onTouched"
  }) ;
  const { handleSubmit } = methods

  const { mutate: addProduct, isPending } = useAddProducts();

  const onSubmit = (data: FormValues) => {
    addProduct(data, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <AddProductsInpusts isPending={isPending} onClose={onClose} />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default AddProduct;
