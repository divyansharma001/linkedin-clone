"use client";
import React, { useState } from "react";
import Profilephoto from "./shared/Profilephoto";
import { Input } from "./ui/input";
import { Postdialog } from "./PostDialog";

const PostInput = ({ user }: { user: any }) => {
    const [open, setOpen] = useState<boolean>(false);
    const inputHandler = () => {
    setOpen(true);
    }
  return (
    <div className="bg-white p-4 m-2 md:m-0 border border-gray-300 rounded-lg">
      <div className="flex items-center gap-3">
        <Profilephoto src={user?.imageUrl} />
        <Input
          type="text"
          placeholder="Start a post"
          className="rounded-full hover:bg-gray-100 p-2 pl-4 h-12 w-full cursor-pointer"
          onClick={inputHandler}
        />
        <Postdialog setOpen={setOpen} open={open} src={user?.imageUrl} />
      </div>
    </div>
  );
};

export default PostInput;
