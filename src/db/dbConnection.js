import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const dbConnection = async() =>{
    try {
       const connectionInstance = await mongoose.connect
       (`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n MongoDB connected !! on Host : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB not connected:", error);
        process.exit(1);
    }
}

export default dbConnection