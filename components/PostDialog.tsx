import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Profilephoto from "./shared/Profilephoto";
import { Textarea } from "./ui/textarea";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { useRef, useState } from "react";
import { readFileAsDataUrl } from "@/lib/utils";
import { createPostAction } from "@/lib/serveractions";

export function Postdialog({
  setOpen,
  open,
  src,
}: {
  setOpen: any;
  open: boolean;
  src: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<string>("");
  const [inputText, setInputText] = useState<string>("");

  const changeHandler = async (e: any) => {
    setInputText(e.target.value);
  };

  const fileChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const event = e.target;
    if (event && event.files && event.files.length > 0) {
      const file = event.files[0];
      if (file) {
        const dataUrl = await readFileAsDataUrl(file);
        setSelectedFile(dataUrl);
      }
    }
  };

  const postActionHandler = async (formdata: FormData) => {
    const inpuText = formdata.get("inputText") as String;
    try {
      await createPostAction(inputText, selectedFile);
    } catch (error) {
      console.error("error occured while posting", error);
    }
  };

  return (
    <Dialog open={open}>
      <DialogContent
        onInteractOutside={() => setOpen(false)}
        className="sm:max-w-[550px] sm:max-h-[80vh] md:max-w-[800px] md:max-h-100vh overflow-y-auto"
      >
        <DialogHeader>
          <DialogTitle className="flex gap-2">
            <Profilephoto src={src} />
            <div>
              <h1>Divyansh Sharma</h1>
              <p className="text-xs text-gray-500 pt-1">Post to anyone</p>
            </div>
          </DialogTitle>
        </DialogHeader>
        <form action={postActionHandler}>
          <div className="flex flex-col">
            <Textarea
              id="name"
              name="inputText"
              value={inputText}
              onChange={changeHandler}
              className="border-none text-lg min-h-[150px]"
              placeholder="What do you want to talk about?"
            />
            <div className="my-4">
              {selectedFile && (
                <div className="flex justify-center mt-4">
                  <Image
                    src={selectedFile}
                    width={800}
                    height={800}
                    objectFit="contain"
                    alt="full-image"
                  />
                </div>
              )}
            </div>
          </div>

          <DialogFooter>
            <div className="flex items-center gap-4">
              <input
                type="file"
                name="image"
                ref={inputRef}
                onChange={fileChangeHandler}
                className="hidden"
                accept="image/*"
              />
              <Button type="submit">Post</Button>
            </div>
          </DialogFooter>
        </form>
        <Button
          className="gap-2"
          variant={"ghost"}
          onClick={() => inputRef?.current?.click()}
        >
          <ImageIcon className="text-blue-500" />
          <p>Media</p>
        </Button>
      </DialogContent>
    </Dialog>
  );
}
