// Codes by mahdi tasha
// Importing part
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Defining any helper functions and exporting them
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
