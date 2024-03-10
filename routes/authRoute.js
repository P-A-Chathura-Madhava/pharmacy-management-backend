import express from "express";
import { createUser, deleteAUser, getAUser, getAllUsers, loginUserCtrl, updateAUser } from "../controller/userController.js";
import { authMiddleware, isOwner } from "../middlewares/authMiddelware.js";
const router = express.Router();

router.get("/getAllUsers", authMiddleware, isOwner, getAllUsers);
router.get("/getAUser/:id", authMiddleware, isOwner, getAUser);
router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.put("/updateAUser/:id", authMiddleware, isOwner, updateAUser);
router.delete("/deleteAUser/:id", authMiddleware, isOwner, deleteAUser);

export default router;