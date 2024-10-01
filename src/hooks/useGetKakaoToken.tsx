import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axios";
import { tokenType } from "../types/tokenType";
import { queryKeys } from "./queryKeys";
import { useNavigate } from "react-router-dom";

const fetchKakaoToken = async (prop: string | null) => {
  const response = await axiosInstance.get<tokenType>(
    `/login/kakao?code=${prop}`
  );
  console.log(response.data);
  return response.data;
};

export const useGetKakaoToken = (prop: string | null) => {
  const navigate = useNavigate();
  const { data: tokens, isError } = useQuery({
    queryKey: [queryKeys.fetchKakaoTokens],
    queryFn: () => fetchKakaoToken(prop),
    enabled: !!prop,
    retry: false,
  });

  if (isError) {
    alert("카카오 로그인 중 오류 발생");
    navigate(-1); // 카카오 로그인 실패하면 로그인 페이지로 이동
  }

  return { tokens };
};
