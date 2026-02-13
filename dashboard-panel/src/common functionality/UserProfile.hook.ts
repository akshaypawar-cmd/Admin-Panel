import { getUsersProfile, type UserProfile } from "@api";
import { useQuery } from "@tanstack/react-query";

export const useUserProfile = () => {
  return useQuery<UserProfile[]>({
    queryKey: ["users-profile"],
    queryFn: getUsersProfile,
  });
};
