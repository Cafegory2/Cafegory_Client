import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "./queryKeys";
import axiosInstance from "../api/axios";
import { Profile } from "../types/profileType";

const fetchProfile = async (accessToken: string | undefined) => {
  const response = await axiosInstance.get<Profile>("/profile/welcome", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

export const useGetProfile = (
  accessToken: string | undefined,
  options = {}
) => {
  const {
    data: profile,
    isPending: profilePending,
    isError: profileError,
  } = useQuery({
    queryKey: [queryKeys.profile],
    queryFn: () => fetchProfile(accessToken),
    ...options,
  });

  return { profile, profilePending, profileError };
};
