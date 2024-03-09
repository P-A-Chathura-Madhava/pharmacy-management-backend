import express from "express";
import { authMiddleware, isAdmin } from "../middlewares/authMiddelware.js";
import { createMedication, getAllMedications } from "../controller/medicationController.js";
const router = express.Router();

router.get("/get-all-medications", getAllMedications);
router.post("/create-medication", createMedication);

export default router;