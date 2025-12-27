// Codes by mahdi tasha
// Importing part
import { cn } from "@/lib/util";
import { ContainerProps } from "@/type/component";
import { JSX } from "react";
import Header from "../header";
import Footer from "../footer";

// Creating and exporting container component as default
export default function Container({
  children,
  className,
}: ContainerProps): JSX.Element {
  // Returning JSX
  return (
    <>
      <Header />
      <div className={cn("min-h-dvh mx-auto max-w-3xl p-4", className)}>
        {children}
      </div>
      <Footer className="mt-10" />
    </>
  );
}
