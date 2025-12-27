// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { useApiQuery } from "@/hook/useApiQuery";
import { FetchRendererProps } from "@/type/component";
import { ReactNode } from "react";
import { Skeleton } from "./ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertTriangle } from "lucide-react";

// Creating and exporting FetchRenderer component as default
export default function FetchRenderer<T>({
  url,
  error,
  loading,
  render,
}: FetchRendererProps<T>): ReactNode {
  // Defining hooks
  const fetchData = useApiQuery<T>({
    url: url,
    queryKey: ["posts"],
  });

  // Conditional rendering
  if (fetchData.isLoading || fetchData.isRefetching) {
    if (!loading) {
      return <Skeleton className="w-full h-[200px] rounded-lg" />;
    } else {
      return loading;
    }
  } else if (fetchData.isError) {
    if (!error) {
      return (
        <Alert variant={"destructive"}>
          <AlertTriangle />
          <AlertTitle>Something went wrong</AlertTitle>
          {fetchData.error.status ? (
            <AlertDescription className="inline">
              An unexpected error of <code>{fetchData.error.status}</code>
              occurred while fetching <code>{url}</code>. Please try again in a
              moment or refresh the page.
            </AlertDescription>
          ) : (
            <AlertDescription className="inline">
              An unexpected error occurred while fetching <code>{url}</code>.
              Please try again in a moment or refresh the page.
            </AlertDescription>
          )}
        </Alert>
      );
    } else {
      return error;
    }
  } else if (!fetchData.isLoading && !fetchData.isError && fetchData.data) {
    return render(fetchData.data, fetchData.refetch);
  }
}
