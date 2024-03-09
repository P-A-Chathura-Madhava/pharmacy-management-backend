import express from "express";
import { authMiddleware, isOwner } from "../middlewares/authMiddelware.js";
import { createMedication, deleteAMedication, getAMedication, getAllMedications, updateAMedication } from "../controller/medicationController.js";
const router = express.Router();

router.get("/get-all-medications", getAllMedications);
router.get("/get-a-medication/:id", getAMedication);
router.post("/create-medication", createMedication);
router.put("/update-medication/:id", updateAMedication);
router.delete("/delete-medication/:id", deleteAMedication);

export default router;