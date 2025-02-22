import mongoose from "mongoose";
import { User } from "../models/User.models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(username, email, password);

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.json({ message: "Email already used" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  User.create({
    username,
    email,
    password: hashedPassword,
  }).then(() => {
    res.status(201).json({ message: "User created" });
  });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    return res.status(404).json({ message: "User not exist" });
  }

  const isMatched = await bcrypt.compare(password, existingUser.password);
  const token = await jwt.sign(
    { UserId: existingUser._id },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
  if (!isMatched) {
    return res.status(401).json({ message: "Password is wrong" });
  }
  return res
    .status(200)
    .json({ message: "User logged In", existingUser, token });
};


