// Codes by mahdi tasha
// Importing part
import axiosInstance from "@/lib/axios";
import { UseApiQueryOptions } from "@/type/hook";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";

// Creating and exporting useApiQuery which uses useQuery to fetch data and return stuff
export function useApiQuery<TData, TError = AxiosError>({
  queryKey,
  url,
  ...options
}: UseApiQueryOptions<TData, TError>) {
  return useQuery<TData, TError>({
    queryKey,
    queryFn: async () => {
      const { data } = await axiosInstance.get(url);
      return data;
    },
    staleTime: 2 * 60 * 1000, // 2 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: 1,
    ...options,
  });
}
