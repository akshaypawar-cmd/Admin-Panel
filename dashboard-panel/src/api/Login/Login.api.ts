import { api } from "./Login.endpoints";
import type { LoginPayload } from "./LoginPayload.type";

export const login = async (data: LoginPayload) => {
  try {
    const res = await api.post("/auth/login", data);
    const token = res.data.token;
    localStorage.setItem("token", token);
    // todo (Akshay): remove console.log before api implimentetion
    console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
