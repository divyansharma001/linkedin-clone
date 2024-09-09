import { UserInterface } from "./UserInterface";

export interface PostInterface {
    description: string,
    userIdentity: string,
    user: UserInterface,
    imageUrl?: string,
    likes: String[],
}