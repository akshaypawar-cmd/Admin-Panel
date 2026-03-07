import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { api } from "@services";
import type { CreateUserForm } from "./user.types";
import { USER_API_ENDPOINTS } from "./user.endPoint";

export const useUserProfile = () => {
  return useQuery({
    queryKey: ["users-profile"],
    queryFn: async (): Promise<CreateUserForm[]> => {
      const { data } = await api.get(USER_API_ENDPOINTS.userProfile);
      return data;
    },
  });
};

export const useCreateNewUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newUser: CreateUserForm) => {
      const { data } = await api.post(USER_API_ENDPOINTS.userProfile, newUser);
      return data;
    },

onSuccess: (data, newUser) => {
  queryClient.setQueryData<CreateUserForm[]>(
    ["users-profile"],
    (oldUser = []) => [...oldUser, { ...newUser, id: data.id }]
  );
}
   
  });
};
