import { User } from "../models/UserModel.js";
import jwt from "jsonwebtoken";
const maxAge = 3 * 24 * 60 * 60 * 1000;
const createToken = (email, userId) =>{
    return jwt.sign({email,userId}, process.env.JWT_KEY, {expiresIn: maxAge});
}
export const signup = async(request, response, next) => {
       try{
        const {email, password} = request.body ;
        if(!email || !password){
            return response.status(400).json({message: "All fields are required"});
        }
        const user = await User.create({email, password});
        response.cookie("jwt", createToken(email , user.id), {
            maxAge,
            httpOnly: true,
            secure: true,
            sameSite: "NONE"
        }); 
        return response.status(201).json({
            user: {
                id: user._id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                image: user.image,
                color: user.color,
                profileSetup: user.profileSetup
            }
        });
       }
       catch(error){
        console.log(error);
        return response.status(500).json({message: "Internal server error"});
       }
}       