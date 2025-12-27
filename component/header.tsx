// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { cn } from "@/lib/util";
import { HeaderProps } from "@/type/component";
import { JSX } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/image/logo.png";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import { Code, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";

// Creating and exporting Header component as default
export default function Header({ className }: HeaderProps): JSX.Element {
  // Defining hooks
  const { setTheme } = useTheme();

  // Returning JSX
  return (
    <header
      className={cn(
        "bg-foreground/5 backdrop-blur-2xl sticky top-0 left-0 border-b border-b-foreground/10 w-full",
        className,
      )}
    >
      <div className="p-3 mx-auto max-w-4xl flex items-center justify-between gap-4">
        <Link href="/">
          <Image
            alt="Logo"
            width={100}
            height={100}
            src={LogoImage.src}
            className="size-10"
          />
        </Link>
        <div className="flex items-center justify-between gap-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button asChild variant={"outline"} size={"icon-lg"}>
                <Link href="https://tasha.vercel.app/">
                  <Code />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Mahdi Tasha</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={"outline"}
                size={"icon-lg"}
                onClick={() =>
                  setTheme((prev) => (prev === "dark" ? "light" : "dark"))
                }
              >
                <SunMoon />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Toggle theme</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </header>
  );
}
