import express from "express";
import { authMiddleware, isAdmin } from "../middlewares/authMiddelware.js";
import { createMedication } from "../controller/medicationController.js";
const router = express.Router();

router.post("/create-medication", createMedication);

export default router;