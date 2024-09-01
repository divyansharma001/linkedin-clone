import mongoose, { Connection } from "mongoose";

let isConnected: Connection | boolean = false;


const connectDb = async () => {
    if (isConnected) {
        console.log("Using existing connection");
        return isConnected;
    }
    try {
       const res = await mongoose.connect(process.env.MONGO_URI as string);
       console.log('res from db', res);
       isConnected = res.connection
        console.log("Connected to database");
    } catch (error) {
        console.log("Error connecting to database", error);
    }
}

export default connectDb;