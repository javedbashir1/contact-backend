import mongoose from "mongoose";
import dotenv from "dotenv";

const connectDB = async ()=>{
    try {
      await mongoose.connect(process.env.MONGODB_URI)
      console.log("Database Connected...");  
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;