// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import Container from "@/component/ui/container";
import { JSX } from "react";

// Creating and exporting Home page as default
export default function HomePage(): JSX.Element {
  // Returning JSX
  return (
    <Container>
      <h1 className="text-4xl mb-4 font-bold">useFetch</h1>
      <p className="mb-8 font-normal">There was an error.</p>
    </Container>
  );
}
