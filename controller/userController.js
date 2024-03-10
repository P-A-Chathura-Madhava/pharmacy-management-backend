import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import bcrypt, { hash } from "bcrypt";
import { generateToken } from "../config/jwtToken.js";
import { hashPassword, matchPassword } from "../config/passwordHash.js";

const createUser = asyncHandler(async (req, res) => {
  // console.log(req.body);
  // creating user
  const { id, name, username, role, password } = req.body;
  const hashedPassword = await hashPassword(password);
  const newUser = User.build({
    id: id,
    name: name,
    username: username,
    role: role,
    password: hashedPassword,
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
  const findUser = await User.findOne({
    where: {
      username: username,
    },
  });
  //   console.log(findUser);
  // const isPasswordMatched = password === findUser.password;
  const isPasswordMatched = await matchPassword(password, findUser.password);
  if (isPasswordMatched) {
    res.json({
      id: findUser?.id,
      name: findUser?.name,
      username: findUser?.username,
      role: findUser?.role,
      token: generateToken(findUser?.id),
    });
  } else {
    res.json({ message: "no data" });
  }
});

const getAllUsers = asyncHandler(async (req, res) => {
  // console.log("message: all users");
  const users = await User.findAll();
  // res.status(200).send(users);
  res.status(200).json(users);
});

const getAUser = asyncHandler(async (req, res) => {
  // console.log("get a user");
  const user = await User.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json(user);
});

const deleteAUser = asyncHandler(async (req, res) => {
  //   console.log("Delete a user");
  const user = await User.findOne({
    where: {
      id: req.params.id,
    },
  });
  await user.destroy();
  res.status(200).json({ message: "user deleted" });
});

const updateAUser = asyncHandler(async (req, res) => {
  // console.log("Update a user");
  const user = await User.findOne({
    where: {
      id: req.params.id,
    },
  });
  const { name, username, password } = req.body;
  await user.set({
    name: name,
    username: username,
    password: password,
  });
  await user.save();
  res.status(200).json(user);
});

export {
  createUser,
  loginUserCtrl,
  getAllUsers,
  getAUser,
  deleteAUser,
  updateAUser,
};
