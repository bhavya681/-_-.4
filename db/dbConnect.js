import mongoose from "mongoose";
import 'dotenv/config.js';

const connectToDb = async () => {
  try {
    await mongoose.connect(
     `${process.env.MONGOOSE_SERVER}`
      );
    console.log("Successfully Connected To Mongoose");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDb;
