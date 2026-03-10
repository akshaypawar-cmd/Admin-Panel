import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { api } from "@services";
import { USER_API_ENDPOINTS } from "./user.endPoint";
import type { UserResponse } from "./user.types";

export const useUserProfile = () => {
  return useQuery({
    queryKey: ["users-profile"],
    queryFn: async (): Promise<UserResponse[]> => {
      const { data } = await api.get(USER_API_ENDPOINTS.userProfile);
      return data;
    },
  });
};

export const useCreateNewUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newUser:UserResponse) => {
      const { data } = await api.post(USER_API_ENDPOINTS.userProfile, newUser);
      return data;
    },

    onSuccess: (data, newUser) => {
      queryClient.setQueryData<UserResponse[]>(
        ["users-profile"],
        (oldUser = []) => [...oldUser, { ...newUser, id: data.id }],
      );
    },
  });
};
