import { profile } from "console";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    userId: {
        type: String,
        required: true,
        unique: true
    },
    profilePhoto: {
        type: String,
        default: ''
    },
    bio: {
        type: String,
        default: ''
    },
    
    
    
    
},{timestamps: true})

export const User = mongoose.model('User', userSchema) as any;