import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-hot-toast";

import type { ProductsResponse } from "./products.types";
import { PRODUCTS_API_ENDPOINTS } from "./products.endPoint";
import { api } from "@services";

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async (): Promise<ProductsResponse[]> => {
      const { data } = await api.get(PRODUCTS_API_ENDPOINTS.products);
      return data;
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      await api.delete(`${PRODUCTS_API_ENDPOINTS.products}/${id}`);
    },
    onSuccess: (_, id) => {
      queryClient.setQueryData<ProductsResponse[]>(
        ["products"],
        (oldData) => oldData?.filter((item) => item.id !== id) || [],
      );
      toast.success("Product deleted successfully ");
    },
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (updatedProduct: ProductsResponse) => {
      const { id, ...rest } = updatedProduct;
      const { data } = await api.put(
        `${PRODUCTS_API_ENDPOINTS.products}/${id}`,
        rest,
      );

      return data;
    },

    onSuccess: (data) => {
      queryClient.setQueryData<ProductsResponse[]>(
        ["products"],
        (oldData) =>
          oldData?.map((item) => (item.id === data.id ? data : item)) || [],
      );

      toast.success("Product updated successfully");
    },
  });
};
