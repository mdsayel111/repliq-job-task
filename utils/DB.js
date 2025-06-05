import mongoose from "mongoose";

const connectDB = async () => {
  mongoose
    .connect(process.env.NEXT_PUBLIC_DB_URL)
    .then(() => console.log("Connected!"));
};

export default connectDB;
