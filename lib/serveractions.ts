"use server"

import { UserInterface } from "@/types/UserInterface"
import { currentUser } from "@clerk/nextjs/server"
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});
    

export const createPostAction = async (inputText: string, selectedFile: string) => {
   const user = await currentUser()
   if(!user) throw new Error("User not authenticated")
    if(!inputText) throw new Error("Input field is required")

        const image = selectedFile ? selectedFile : null;

        const userDatabase:UserInterface = {
            firstName: user?.firstName || "FirstName",
            lastName: user?.lastName || "LastName",
            userId: +user?.id || NaN,
            profilePhoto: user?.imageUrl,
            timeStamp: new Date().toISOString()
        }

        try {
            
           if (image) {
            //1. Create post with image and text
            await prisma.post.create({
                data: {
                    description: inputText,
                    imageUrl: image,
                    userId: +userDatabase.userId,
                }
            })
          
            
           } else {
            //2. Create post with text only
            await prisma.post.create({
                data: {
                    description: inputText,
                    userId: +userDatabase.userId,
                }
            })
            
           }
            
        } catch (error: any) {
            throw new Error("Error occured while posting", error)
        }
}