import express from "express";
import { createUser, deleteAUser, getAUser, getAllUsers, loginUserCtrl, updateAUser } from "../controller/userController.js";
import { authMiddleware, isAdmin } from "../middlewares/authMiddelware.js";
const router = express.Router();

router.get("/getAllUsers", getAllUsers);
router.get("/getAUser/:id", authMiddleware, isAdmin, getAUser);
router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.put("/updateAUser/:id", updateAUser);
router.delete("/deleteAUser/:id", deleteAUser);

export default router;