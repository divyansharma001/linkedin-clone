"use server";

import { UserInterface } from "@/types/UserInterface";
import { currentUser } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const createPostAction = async (
  inputText: string,
  selectedFile: string
) => {
  const user = await currentUser();
  console.log("User:", user?.id);   
  if (!user) throw new Error("User not authenticated");
  if (!inputText) throw new Error("Input field is required");

  const image = selectedFile ? selectedFile : null;

  const userDatabase: UserInterface = {
    firstName: user?.firstName || "FirstName",
    lastName: user?.lastName || "LastName",
    userIdentity: user?.id || "UserId",
    profilePhoto: user?.imageUrl,
    timeStamp: new Date().toISOString(),
  };

  console.log("UserDatabase:", userDatabase);

  try {
    let uploadResponse;
    if (image) {
      //1. Create post with image and text
      uploadResponse = await cloudinary.uploader.upload(image);

      await prisma.post.create({
        data: {
          description: inputText,
          imageUrl: uploadResponse?.secure_url,
          userIdentity : userDatabase.userIdentity
        },
      });
    } else {
      //2. Create post with text only
      await prisma.post.create({
        data: {
          description: inputText,
          userIdentity: userDatabase.userIdentity,
        },
      });
    }
  } catch (error: any) {
    console.error("Error occurred while posting:", error);
  }
};
