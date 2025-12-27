// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";
import { GETPostType } from "./get";

// Creating and exporting types used in props of components
export interface RootLayoutProps {
  children: ReactNode;
}

export interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export interface HeaderProps {
  className?: string;
}

export interface FooterProps {
  className?: string;
}

export interface FetchRendererProps<TData> {
  url: string;
  loading?: ReactNode;
  error?: ReactNode;
  queryKey: string[];
  render: (data: TData, refetch: () => void) => ReactNode;
  enabled?: boolean;
  staleTime?: number;
  refetchInterval?: number;
}

export interface RootLayoutContentProps {
  children: ReactNode;
  bodyClassName?: string;
  fontClassName?: string;
}

export interface PostProps {
  className?: string;
  data: GETPostType;
  refetch: () => void;
}
