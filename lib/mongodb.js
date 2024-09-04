import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.MONGODB_URL);
            console.log("db connected");
        }
    } catch (err) {
        console.log(err)
    }
}

export default connectDB;