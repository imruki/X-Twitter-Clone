import mongoose, { mongo } from "mongoose";

const connectMongoDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connection to MongoDB successful : ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error while connecting to MongoDB : ${error.message}`);
        process.exit(1);
    }
}

export default connectMongoDB;