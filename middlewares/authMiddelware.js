import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({
            where: {
              id: decoded?.id,
            },
          });
        // console.log(user);
        req.user = user;
        next();
      }
    } catch (error) {
      throw new Error("Not autherized, token expired. Please login again");
    }
  } else {
    throw new Error("There is no token attach to the hearder");
  }
});

const isOwner = asyncHandler(async (req, res, next) => {
  const { id } = req.user;
  const adminUser = await User.findOne({
    where: {
      id: id,
    },
  });
  if (adminUser.role !== "owner") {
    throw new Error("You are not an admin");
  } else {
    next();
  }
});

const isOwnerOrManager = asyncHandler(async (req, res, next) => {
  const { id } = req.user;
  const adminUser = await User.findOne({
    where: {
      id: id,
    },
  });
  if (adminUser.role !== "owner" || adminUser.role !== "manager") {
    throw new Error("You are not an owner or manager");
  } else {
    next();
  }
});

export { authMiddleware, isOwner, isOwnerOrManager };