import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { EditProductForm } from "@forms";
import { useUpdateProduct, type ProductsResponse, type RemoveIdProduct } from "@api";
import type { Props } from "./editProduct.types";
import { editProductSchema } from "@schema";

const EditProduct = ({ product, onClose }: Props) => {
  const { mutate: updateProduct, isPending } = useUpdateProduct();
  const methodes = useForm<RemoveIdProduct>({
    defaultValues: product,
    resolver: yupResolver(editProductSchema),
    mode: "onTouched",
  });
  const { handleSubmit } = methodes;
  const queryClient = useQueryClient();

  const onSubmit = (data:RemoveIdProduct) => {
    updateProduct(
      { ...product, ...data },
      {
        onSuccess: (data) => {
          queryClient.setQueryData<ProductsResponse[]>(["products"], (oldData=[]) =>
            oldData.map((item) =>
              item.id === data.id ? data : item,
            ),
          );

          toast.success("Product updated successfully"); 
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
            className="bg-white rounded-2xl shadow-2xl p-8 space-y-2"
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
