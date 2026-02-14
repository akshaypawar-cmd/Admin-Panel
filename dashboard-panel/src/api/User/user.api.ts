import { useQuery } from "@tanstack/react-query";

import { api } from "@services";
import type { UserProfileResponse } from "./user.types";
import { USER_API_ENDPOINTS } from "./use.endPoint";

export const useUserProfile = () => {
  return useQuery({
    queryKey: ["users-profile"],
    queryFn:async():Promise<UserProfileResponse[]> =>{
      const {data} = await api.get(USER_API_ENDPOINTS.userProfile)
      return data 
    } 
  });
};

