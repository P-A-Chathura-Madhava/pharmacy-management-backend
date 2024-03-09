import express from "express";
import { authMiddleware, isOwner, isOwnerOrManager } from "../middlewares/authMiddelware.js";
import { createMedication, deleteAMedication, getAMedication, getAllMedications, softDeleteAMedication, updateAMedication } from "../controller/medicationController.js";
const router = express.Router();

// access to all users
router.get("/get-all-medications", getAllMedications);
router.get("/get-a-medication/:id", getAMedication);

// access to owner
router.post("/create-medication", authMiddleware, isOwner, createMedication);

// access to owner, manager and cashier
router.put("/update-medication/:id", authMiddleware, updateAMedication);
router.put("/soft-delete-medication/:id", authMiddleware, isOwnerOrManager, softDeleteAMedication);

// access to owner
router.delete("/delete-medication/:id", authMiddleware, isOwner, deleteAMedication);

export default router;