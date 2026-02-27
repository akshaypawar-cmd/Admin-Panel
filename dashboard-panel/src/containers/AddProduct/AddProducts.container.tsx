import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { useAddProducts, type RemoveIdProduct } from "@api";
import { AddProductsForm, type AddProductProps } from "@forms";
import { addInputSchema } from "@schema";

const AddProduct = ({ onClose }: AddProductProps) => {
  const methods = useForm<RemoveIdProduct>({
    resolver: yupResolver(addInputSchema),
    mode: "onTouched",
  });
  const queryClient = useQueryClient();
  const { handleSubmit } = methods;
  const { mutate: addProduct, isPending } = useAddProducts();

  const onSubmit = (data: RemoveIdProduct) => {
    addProduct(data, {
      onSuccess: (newProduct) => {
        queryClient.setQueryData<RemoveIdProduct[]>(
          ["products"],
          (oldData = []) => [...oldData, newProduct],
        );
        toast.success("Product added successfully");
        onClose();
      },
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <AddProductsForm isPending={isPending} onClose={onClose} />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default AddProduct;
