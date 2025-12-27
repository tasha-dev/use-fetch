// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { JSX } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/component/ui/card";
import { Button } from "@/component/ui/button";
import { PostProps } from "@/type/component";
import { cn } from "@/lib/util";

// Creating and exporting Post component as default
export default function Post({
  data,
  className,
  refetch,
}: PostProps): JSX.Element {
  // Reutning JSX
  return (
    <Card
      className={cn("flex flex-col items-center justify-between", className)}
    >
      <CardHeader className="w-full h-full block">
        <CardTitle className="truncate mb-3">{data.title}</CardTitle>
        <CardDescription>{data.body}</CardDescription>
      </CardHeader>
      <CardFooter className="w-full shrink-0">
        <Button onClick={refetch} variant={"destructive"}>
          Delete the item ?
        </Button>
      </CardFooter>
    </Card>
  );
}
