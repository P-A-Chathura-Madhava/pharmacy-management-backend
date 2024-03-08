import express from "express";
import env from "dotenv";
import { sequelize, connectToDb } from "./config/db.js";
connectToDb();

const app = express();
const dotenv = env.config();
const PORT = process.env.PORT || 4000;

app.use("/", (req, res) => {
    res.send("Server responds");
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});