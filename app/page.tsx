// Codes by mahdi tasha
// Importing part
import Container from "@/component/ui/container";
import { JSX } from "react";

// Creating and exporting Home page as default
export default function HomePage(): JSX.Element {
  // Returning JSX
  return (
    <Container>
      <h1 className="text-4xl mb-4 font-bold">useFetch</h1>
      <p className="mb-8 font-normal">
        <b>useFetch</b> Is a custom hook for fetching data that comes with its
        ease to use error handling and loading managment for making life of a
        developer <b>10x</b> easier
      </p>
    </Container>
  );
}
