import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axios";
import { tokenType } from "../types/tokenType";
import { queryKeys } from "./queryKeys";

const fetchKakaoToken = async (prop: string | null) => {
  const response = await axiosInstance.get<tokenType>(
    `/login/kakao?code=${prop}`
  );
  return response.data;
};

//카카오 로그인으로 accessToken과 refreshToken 가져오는 훅
export const useGetKakaoToken = (prop: string | null) => {
  const { data: tokens } = useQuery({
    queryKey: [queryKeys.fetchKakaoTokens],
    queryFn: () => fetchKakaoToken(prop),
    enabled: !!prop,
  });

  return { tokens };
};
