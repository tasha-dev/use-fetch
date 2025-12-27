// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { cn } from "@/lib/util";
import { RootLayoutContentProps } from "@/type/component";
import { JSX } from "react";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./ui/sonner";

// defining query client for react query
const queryClient = new QueryClient();

// Creating and exporting Header component as default
export default function RootLayoutContent({
  children,
  bodyClassName,
  fontClassName,
}: RootLayoutContentProps): JSX.Element {
  // Returning JSX
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <body
          className={cn(
            "min-h-dvh w-dvw overflow-x-hidden overflow-y-auto bg-background text-foreground",
            bodyClassName,
            fontClassName,
          )}
        >
          <Toaster position="bottom-center" />
          {children}
        </body>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
