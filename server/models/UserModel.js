import mongoose from "mongoose";
import { genSalt, hash } from "bcrypt";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required:[ true , "Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    color: {
        type: Number,
        required: false
    },
    profileSetup: {
        type: Boolean,
        default: false
    }

});
userSchema.pre("save", async function(next){
    const salt = await genSalt(10);
    this.password = await hash(this.password, salt);
    next();
})

export const User = mongoose.model("User", userSchema); 