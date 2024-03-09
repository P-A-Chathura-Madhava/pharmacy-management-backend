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
      console.log("Not autherized, token expired. Please login again");
    }
  } else {
    console.log("There is no token attached");
  }
});

export { authMiddleware };