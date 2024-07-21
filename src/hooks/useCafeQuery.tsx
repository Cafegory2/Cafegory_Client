import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axios";
import { CafeList } from "../types/cafeType";
import { queryKeys } from "./queryKeys";

const fetchCafeList = async () => {
  const response = await axiosInstance.get<CafeList[]>("/cafe/list");
  return response.data;
};

export const useCafeListQuery = () => {
  const {
    isLoading: isCafeListLoading,
    isError: isCafeListError,
    data: cafeListState,
  } = useQuery<CafeList[]>({
    queryKey: [queryKeys.cafeLists],
    queryFn: fetchCafeList,
  });

  return { isCafeListLoading, isCafeListError, cafeListState };
};
