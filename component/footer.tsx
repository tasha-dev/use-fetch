// Codes by mahdi tasha
// Importing part
import { cn } from "@/lib/util";
import { FooterProps } from "@/type/component";
import { Heart } from "lucide-react";
import Link from "next/link";
import { JSX } from "react";

// Creating and exporting Footer component as default
export default function Footer({ className }: FooterProps): JSX.Element {
  // Returning JSX
  return (
    <footer
      className={cn(
        "bg-foreground/5 border-t border-t-foreground/10 w-full",
        className,
      )}
    >
      <div className="p-3 mx-auto max-w-4xl flex items-center justify-center gap-4">
        <p className="text-center">
          Made With{" "}
          <Heart className="inline size-5 -mt-1 fill-rose-500 stroke-rose-500" />{" "}
          By{" "}
          <Link
            className="text-primary underline-offset-4 hover:underline inline"
            href="https://tasha.vercel.app/"
          >
            Mahdi Tasha
          </Link>
        </p>
      </div>
    </footer>
  );
}
