import express from "express";
import { createUser, getAllUsers, loginUserCtrl } from "../controller/userController.js";
const router = express.Router();

router.get("/getAllUsers", getAllUsers);
router.post("/register", createUser);
router.post("/login", loginUserCtrl);

export default router;