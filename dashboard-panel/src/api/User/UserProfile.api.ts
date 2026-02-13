import { useQuery } from "@tanstack/react-query";

import { api } from "@services";
import { AUTH_API_ENDPOINTS } from "../Auth/Login";
import type { UserProfileResponse } from "./userProfile.types";

export const getUsersProfile = async (): Promise<UserProfileResponse[]> => {
  const res = await api.get(AUTH_API_ENDPOINTS.userProfile);
  return res.data;
}

export const useUserProfile = () => {
  return useQuery<UserProfileResponse[]>({
    queryKey: ["users-profile"],
    queryFn: getUsersProfile,
  });
};
