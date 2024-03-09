import express from "express";
import { authMiddleware, isAdmin } from "../middlewares/authMiddelware.js";
import { createMedication, getAMedication, getAllMedications } from "../controller/medicationController.js";
const router = express.Router();

router.get("/get-all-medications", getAllMedications);
router.get("/get-a-medication/:id", getAMedication);
router.post("/create-medication", createMedication);

export default router;