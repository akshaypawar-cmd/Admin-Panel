import { useQuery } from "@tanstack/react-query";

import { api } from "@services";
import { CARTS_API_ENDPOINTS } from "./carts.endPoint";
import type { CartsResponse } from "./carts.types";

export const useGetCarts = () => {

  return useQuery({
    queryKey: ["carts"],
    queryFn: async (): Promise<CartsResponse[]> => {
      const { data } = await api.get(CARTS_API_ENDPOINTS.carts);
      return data;
    },
  });
};
