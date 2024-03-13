import express from "express";
import "dotenv/config";
import jwt from "jsonwebtoken";

const fetchUser = async (req, res, next) => {
  try {
    const token = req.header("auth-token");

    if (token) {
      const { userId } = jwt.verify(token, "" + process.env.JWT_SECRET);
      req.userId = userId;
      next();
    } else {
      res
        .status(401)
        .send({ success: false, message: "Authenticate Using Valid Token" });
    }
  } catch (error) {
    res
      .status(401)
      .send({ success: false, message: "Authenticate Using Valid Token" });
  }
};

export default fetchUser;
