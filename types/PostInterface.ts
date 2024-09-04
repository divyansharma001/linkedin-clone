import { UserInterface } from "./UserInterface";

export interface PostInterface {
    id : Number,
    description: string,
    userId: Number,
    user: UserInterface,
    imageUrl?: string,
    likes: Number[],
}