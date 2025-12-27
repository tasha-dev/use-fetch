// Codes by mahdi tasha
// Importing part
import { UseMutationOptions, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";

// Creating and exporting types used hooks
export type QueryFn<T> = () => Promise<T>;
export interface UseApiQueryOptions<TData, TError = AxiosError>
  extends Omit<
    UseQueryOptions<TData, TError, TData, readonly unknown[]>,
    "queryKey" | "queryFn"
  > {
  queryKey: readonly unknown[];
  queryFn?: QueryFn<TData>;
  url: string;
}

export interface UseApiMutationProps<TData, TVariables> {
  url: string;
  method: "post" | "put" | "delete" | "patch";
  options?: UseMutationOptions<TData, Error, TVariables>;
  isFormData?: boolean;
}
