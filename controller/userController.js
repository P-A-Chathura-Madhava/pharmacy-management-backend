import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import bcrypt, { hash } from "bcrypt";
import { generateToken } from "../config/jwtToken.js";

const createUser = asyncHandler(async (req, res) => {
  // creating user
  const { id, name, username, role, password } = req.body;
  const newUser = User.build({
    id: id,
    name: name,
    username: username,
    role: role,
    password: password,
  });

  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.json(error);
  }
});

const loginUserCtrl = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const findUser = await User.findOne({ username: username });
  const isPasswordMatched = password === findUser.password;
  if (isPasswordMatched) {
    res.json({
      id: findUser?.id,
      name: findUser?.name,
      username: findUser?.username,
      role: findUser?.role,
      token: generateToken(findUser?.id)
    });
  } else {
    res.json({ message: "no data" });
  }
});

const getAllUsers = asyncHandler(async (req, res)=> {
        // console.log("message: all users");
        const users = await User.findAll();
        // res.status(200).send(users);
        res.status(200).json(users);
})

export { createUser, loginUserCtrl, getAllUsers };
