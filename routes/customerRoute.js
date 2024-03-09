import express from "express";
import { authMiddleware, isAdmin } from "../middlewares/authMiddelware.js";
import { createCustomer } from "../controller/customerController.js";
const router = express.Router();

router.post("/create-customer", createCustomer);

export default router;