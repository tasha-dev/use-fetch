// Codes by mahdi tasha
// Importing part
import { Button } from "@/component/ui/button";
import Container from "@/component/ui/container";
import { Home } from "lucide-react";
import Link from "next/link";
import { JSX } from "react";

// Creating and exporting Home page as default
export default function HomePage(): JSX.Element {
  // Returning JSX
  return (
    <Container>
      <h1 className="text-4xl mb-4 font-bold">useFetch</h1>
      <p className="mb-8 font-normal">
        The page you are looking for is not found !
      </p>
      <div className="flex items-center justify-center">
        <Button asChild size={"lg"}>
          <Link href="/">
            <Home />
            Back to home page
          </Link>
        </Button>
      </div>
    </Container>
  );
}
