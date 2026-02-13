import { useMutation } from "@tanstack/react-query";

import { AUTH_API_ENDPOINTS } from "./Login.endPoint";
import type { LoginPayload } from "./Login.types";
import { api } from "@services";

export const userLogin = () => {
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
