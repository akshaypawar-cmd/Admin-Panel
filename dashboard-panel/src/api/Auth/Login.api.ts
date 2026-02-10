import { AUTH_API_ENDPOINTS } from "./Login.endPoint";
import type { LoginPayload } from "./Login.types";
import { loginToken } from "./LoginToken";
import { api } from "@services";

export const loginUser = async (data: LoginPayload) => {
  try {
    const res = await api.post(AUTH_API_ENDPOINTS.loginUser, data);
    loginToken(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
