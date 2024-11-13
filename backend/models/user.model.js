import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    clerkId: {
        type: String,
        required: true,
        unique: true
    }


}, { timestamps: true });   // timestamps: true means profile createdAt (time) and updatedAt (time) will be stored in our database



export const User = mongoose.model("User", userSchema);