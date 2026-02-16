import { useMutation } from "@tanstack/react-query";

import { api } from "@services";
import type { LoginPayload } from "./auth.types";
import { AUTH_API_ENDPOINTS } from "./auth.endPoint";

export const authUserLogin = () => {
  
  return useMutation({
    mutationFn: async (data: LoginPayload) => {
      const res = await api.post(AUTH_API_ENDPOINTS.loginUser, data);
      const token = res.data?.token;
      if (token) {
        localStorage.setItem("token", token);

        localStorage.setItem("username", data.username);
      }

      return res.data;
    },
  });
};
