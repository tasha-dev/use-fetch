// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { JSX, useState } from "react";
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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Loader2, Trash } from "lucide-react";
import useApiMutation from "@/hook/useApiMutation";
import { toast } from "sonner";

// Creating and exporting Post component as default
export default function Post({
  data,
  className,
  refetch,
}: PostProps): JSX.Element {
  // Defining hooks
  const [dialogOpened, setDialogOpened] = useState<boolean>(false);
  const deletePost = useApiMutation({
    method: "delete",
    url: `/posts/${data.id}`,
    options: {
      onSuccess: () => {
        toast.success("post is deleted successfully.");
        refetch();
      },
      onError: () => toast.error("There was an error while deleting post."),
      onSettled: () => setDialogOpened(false),
    },
  });

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
        <Dialog
          open={dialogOpened}
          onOpenChange={(open) => {
            if (!deletePost.isPending) {
              setDialogOpened(open);
            }
          }}
        >
          <DialogTrigger asChild>
            <Button variant={"destructive"} className="w-full">
              <Trash className="shrink-0" />
              <span className="text-left flex-1 truncate block">Delete</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delete this post permanently ?</DialogTitle>
              <DialogDescription>
                {
                  "You're about to delete the post. This will remove it from whole database and cannot be undone."
                }
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button disabled={deletePost.isPending} variant={"ghost"}>
                  Cancle
                </Button>
              </DialogClose>
              <Button
                disabled={deletePost.isPending}
                variant={"destructive"}
                onClick={() => deletePost.mutate({})}
              >
                {deletePost.isPending ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <Trash />
                )}
                Yes, Im sure
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
