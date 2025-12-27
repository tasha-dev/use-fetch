// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";

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
