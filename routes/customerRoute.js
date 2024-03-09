import express from "express";
import { authMiddleware, isAdmin } from "../middlewares/authMiddelware.js";
import { createCustomer, getACustomer, getAllCustomers } from "../controller/customerController.js";
const router = express.Router();

router.get("/get-all-customers", getAllCustomers);
router.get("/get-a-customer/:id", getACustomer);
router.post("/create-customer", createCustomer);

export default router;