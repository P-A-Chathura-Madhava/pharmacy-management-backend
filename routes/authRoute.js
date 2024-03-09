import express from "express";
import { createUser, deleteAUser, getAUser, getAllUsers, loginUserCtrl } from "../controller/userController.js";
const router = express.Router();

router.get("/getAllUsers", getAllUsers);
router.get("/getAUser/:id", getAUser);
router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.delete("/deleteAUser/:id", deleteAUser);

export default router;