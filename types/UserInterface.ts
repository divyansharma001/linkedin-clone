export interface UserInterface {
    firstName: string,
    lastName: string,
    userId: Number,
    profilePhoto?: string,
    bio?: string,
    timeStamps: Date,
}

export interface PostInterface {
    id : Number,
    description: string,
    userId: Number,
    user: UserInterface,
    imageUrl?: string,
    likes: Number[],
}

export interface CommentInterface {
    textMessage: string,
    user: UserInterface,
}