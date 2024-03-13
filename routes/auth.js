import express from "express";
import "dotenv/config.js";
const router = express.Router();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/User.js";
import fetchUser from "../middleware/fetchuser.js";

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, profile, secret } = req.body;
    if (!name || !email || !password || !profile || !secret) {
      res
        .status(404)
        .success({ success: false, error: "Fields can't be empty" });
    }
    const user = await User.findOne({ email });
    if (user) {
      res.status(401).success({
        success: true,
        error: "User Already Exists,please kindly login",
      });
    }
    const hashword = await bcrypt.hash(password,10);
    const newUser = await User({
      name,
      email,
      password: hashword,
      profile,
      secret
    });
    await newUser.save();
    res
      .status(201)
      .send({ success: true, message: "successfully Created User", newUser });
  } catch (error) {
    res.status(500).send({ success: false, error: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(401).send({ success: false, error: "Internal Server Error" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).send({ success: false, message: "User Not Found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res
        .status(404)
        .send({ success: false, error: "Email or Password Not Match" });
    }
    const token = jwt.sign({ userId: user.id }, "" + process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res
      .status(200)
      .send({ success: true, message: "Login Successfully", token });
  } catch (error) {
    res.status(500).send({ success: false, error: "Internal Server Error" });
  }
});

router.post("/forgot-password", async (req, res) => {
  try {
    const { email, secret, npassword } = req.body;

    if (!email || !secret || !npassword) {
     return res
        .status(404)
        .send({ success: false, message: "Fields Can't be Empty" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).send({ success: false, message: "User Not Found" });
    }

    const hashword = await bcrypt.hash(npassword,10);

    const UPUser = await User.findByIdAndUpdate(
      user._id,
      {
        password: hashword,email,secret
      },
      { new: true }
    );

 return   res
      .status(200)
      .send({ success: true, message: "Pssword Successfully Updated", UPUser });
  } catch (error) {
  return  res.status(500).send({ success: false, error: "Internal Server Error" });
  }
});

router.get("/getUser", fetchUser, async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId).select("-password");
    res.status(200).send({ success: true, message: "Hello There", user });
  } catch (error) {
    res.status(500).send({ success: false, error: "Internal Server Error" });
  }
});

export default router;
