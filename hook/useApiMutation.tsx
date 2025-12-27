// Importing part
import axiosInstance from "@/lib/axios";
import { UseApiMutationProps } from "@/type/hook";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

// creating and Exporting useApiMutation custom hook as default
// Used for non-get methods (CRUD)
export default function useApiMutation<TData = unknown, TVariables = unknown>({
  url,
  method,
  options,
  isFormData,
}: UseApiMutationProps<TData, TVariables>) {
  return useMutation<TData, AxiosError, TVariables>({
    mutationFn: async (variables) => {
      const { data } = await axiosInstance.request<TData>({
        url,
        method: method.toUpperCase(),
        data: variables,
        headers: isFormData
          ? { "Content-Type": "multipart/form-data" }
          : undefined,
      });

      return data;
    },
    onError: (error, variables, context, s) => {
      options?.onError?.(error, variables, context, s);
    },
    onSuccess: options?.onSuccess,
    ...options,
  });
}
