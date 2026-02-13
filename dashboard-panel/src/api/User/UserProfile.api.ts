import { api } from "@services";
import type { UserProfile } from "./UserProfile.types";
import { AUTH_API_ENDPOINTS } from "../Auth/Login";

export const getUsersProfile = async (): Promise<UserProfile[]> => {
  const res = await api.get(AUTH_API_ENDPOINTS.userProfile);
  return res.data;
};
