import express from "express";
import { authMiddleware, isOwner } from "../middlewares/authMiddelware.js";
import { createCustomer, deleteACustomer, getACustomer, getAllCustomers, softDeleteACustomer, updateACustomer } from "../controller/customerController.js";
const router = express.Router();

router.get("/get-all-customers", getAllCustomers);
router.get("/get-a-customer/:id", getACustomer);
router.post("/create-customer", createCustomer);
router.put("/update-customer/:id", updateACustomer);
router.put("/soft-delete-customer/:id", softDeleteACustomer);
router.delete("/delete-customer/:id", deleteACustomer);

export default router;