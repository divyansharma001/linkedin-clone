
import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Profilephoto = ({ src }: { src: string }) => {
  return (
    <div>
      <Avatar className="cursor-pointer">
        <AvatarImage src={src} alt="Profile Picture" />
        <AvatarFallback>Profile</AvatarFallback>
      </Avatar>

    </div>
  );
};

export default Profilephoto;
