import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import bcrypt, { hash } from "bcrypt";

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
    });
  } else {
    res.json({ message: "no data" });
  }
});

export { createUser, loginUserCtrl };
