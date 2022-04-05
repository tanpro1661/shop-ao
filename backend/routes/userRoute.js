import express from "express";
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { name, username, password, cfpassword } = req.body;
  if (password !== cfpassword)
    return res.status(400).json({ err: "Password does'nt mach" });
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ name, username, password: hashPassword });
    await newUser.save();
    res.status(200).json("Register Success");
  } catch (err) {
    res.status(500).json(err);
  }
});

userRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({
      username,
    });
    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        const userObj = { id: user._id, isAdmin: user.isAdmin };
        const generateAccessToken = (userObj) => {
          return jwt.sign(userObj, process.env.JWT_SECRET, {
            expiresIn: "3d",
          });
        };
        const token = generateAccessToken(userObj);
        const refreshToken = jwt.sign(userObj, process.env.JWT_REFRESH_SECRET);
        res.status(200).json({
          auth: true,
          token: token,
          refreshToken: refreshToken,
          ...user._doc,
        });
      } else {
        res.status(400).json({ auth: false, error: "Wrong password" });
      }
    } else {
      res.status(401).json({ auth: false, error: "User does not exist" });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

export { userRouter };
