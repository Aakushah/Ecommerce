import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_COMPASS_URI);
        console.log("Mongodb Connected")
    }catch(error){
        console.log(error)
    }
};

export default connectDB;;