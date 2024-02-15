import User from '../models/User.js';
import jwt from "jsonwebtoken";



const verifyJwt = async(req,res,next) => {
    

    try{
    
    const token = req.cookies.accessToken || req.header("Authorization")?.replace("Bearer ","");
    

    //if there is no token then deny access with 401 authorized status
    if(! token){
        res.status(401).json({message: "Token not found" });
    }
    
    // Check if the token is valid using a secret key
    const decode=jwt.verify(token , process.env.ACCESS_TOKEN_SECRET);
    

    // Get the user linked to the token
    const user = await User.findById(decode?._id).select(" -password -refreshToken ");

    

     // If the user isn't found, deny access with a 404 Not Found status
     if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    req.user=user;
    next();

    }
    catch(error){
    // Handle any errors during token verification with a 500 Internal Server Error status
    return res.status(500).json({ message: error.message });

    }



}

export {verifyJwt}