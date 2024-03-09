import express from "express";
import { authMiddleware, isAdmin } from "../middlewares/authMiddelware.js";
import { createCustomer, getAllCustomers } from "../controller/customerController.js";
const router = express.Router();

router.get("/get-all-customers", getAllCustomers);
router.post("/create-customer", createCustomer);

export default router;