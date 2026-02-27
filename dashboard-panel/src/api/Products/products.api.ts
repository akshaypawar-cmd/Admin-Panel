import { useMutation, useQuery } from "@tanstack/react-query";

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
  return useMutation({
    mutationFn: async (id: number) => {
      const { data } = await api.delete(
        `${PRODUCTS_API_ENDPOINTS.products}/${id}`,
      );
      return { data, id };
    },
  });
};

export const useUpdateProduct = () => {
  return useMutation({
    mutationFn: async (updatedProduct: ProductsResponse) => {
      const { id, ...rest } = updatedProduct;
      const { data } = await api.put(
        `${PRODUCTS_API_ENDPOINTS.products}/${id}`,
        rest,
      );

      return data;
    },
  });
};

export const useAddProducts = () => {
  return useMutation({
    mutationFn: async (newProduct: Omit<ProductsResponse, "id">) => {
      const { data } = await api.post(
        PRODUCTS_API_ENDPOINTS.products,
        newProduct,
      );
      return data;
    },
  });
};
