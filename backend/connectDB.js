import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected");
  } catch (error) {
    console.log(err);
  }
};

export { connectDB };
