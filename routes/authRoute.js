import express from "express";
import { createUser, getAUser, getAllUsers, loginUserCtrl } from "../controller/userController.js";
const router = express.Router();

router.get("/getAllUsers", getAllUsers);
router.get("/getAUser/:id", getAUser);
router.post("/register", createUser);
router.post("/login", loginUserCtrl);

export default router;