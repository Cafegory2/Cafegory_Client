import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axios";
import { tokenType } from "../types/tokenType";
import { queryKeys } from "./queryKeys";

const fetchKakaoToken = async (prop: string | null) => {
  const response = await axiosInstance.get<tokenType>(
    `/login/kakao?code=${prop}`
  );
  console.log(response.data);
  return response.data;
};

export const useGetKakaoToken = (prop: string | null) => {
  const {
    data: tokens,
    isPending: tokenPending,
    isError: tokenError,
  } = useQuery({
    queryKey: [queryKeys.fetchKakaoTokens],
    queryFn: () => fetchKakaoToken(prop),
    enabled: !!prop,
    retry: false,
    refetchOnWindowFocus: false,
  });

  return { tokens, tokenPending, tokenError };
};
