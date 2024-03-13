import mongoose, { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    required: true,
  },
  secret: {
    type: String,
    required: true,
  },
});

const User = model("user", UserSchema);
User.createIndexes();
export default User;
