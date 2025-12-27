// Codes by mahdi tasha
// Importing part
import { RootLayoutProps } from "@/type/component";
import { JSX } from "react";
import type { Metadata } from "next";
import "@/style/globals.css";
import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";

// Defining font
const jetbrainsMonoFont = JetBrains_Mono({
  display: "block",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: "normal",
});

// Defining metadata
export const metadata: Metadata = {
  title: "useFetch - Error, Loading and data usage",
  description:
    "Completly free and easy to use component and hook for loading state, handling errors and showing the data in next.js app.",
};

// Creating and exporting RootLayout component as default
export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  // Returning JSX
  return (
    <html suppressHydrationWarning lang="en">
      <ThemeProvider>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
