import express from "express";
import { authMiddleware, isOwner, isOwnerOrManager } from "../middlewares/authMiddelware.js";
import { createCustomer, deleteACustomer, getACustomer, getAllCustomers, softDeleteACustomer, updateACustomer } from "../controller/customerController.js";
const router = express.Router();

// access to all users
router.get("/get-all-customers", getAllCustomers);
router.get("/get-a-customer/:id", getACustomer);

// access to owner
router.post("/create-customer", authMiddleware, isOwner, createCustomer);

// access to owner, manager and cashier
router.put("/update-customer/:id", authMiddleware, updateACustomer);
router.put("/soft-delete-customer/:id", authMiddleware, isOwnerOrManager, softDeleteACustomer);

// access to owner
router.delete("/delete-customer/:id", authMiddleware, isOwner, deleteACustomer);

export default router;