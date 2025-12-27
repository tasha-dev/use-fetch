// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import FetchRenderer from "@/component/fetchRenderer";
import Post from "@/component/post";
import { Button } from "@/component/ui/button";
import Container from "@/component/ui/container";
import { Skeleton } from "@/component/ui/skeleton";
import { GETPostType } from "@/type/get";
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
      <FetchRenderer<GETPostType[]>
        url="/posts"
        queryKey={["posts"]}
        loading={
          <div className="grid lg:grid-cols-2 gap-6">
            {[...new Array(10)].map((_, index) => (
              <Skeleton key={index} className="rounded-xl h-[300px]" />
            ))}
          </div>
        }
        render={(data, refetch) => (
          <>
            <Button
              variant={"default"}
              size="lg"
              className="mb-5"
              onClick={refetch}
            >
              Refetch ?
            </Button>
            <div className="grid lg:grid-cols-2 gap-6">
              {data.map((item, index) => (
                <Post data={item} key={index} refetch={refetch} />
              ))}
            </div>
          </>
        )}
      />
    </Container>
  );
}
