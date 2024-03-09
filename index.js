import express from "express";
import env from "dotenv";
import { sequelize, connectToDb } from "./config/db.js";
import authRouter from "./routes/authRoute.js";
// creating the database
// sequelize.sync().then(()=>console.log("db is ready"));

import bodyParser from "body-parser";
connectToDb();

const app = express();
const dotenv = env.config();
const PORT = process.env.PORT || 4000;


// app.use("/", (req, res) => {
//     res.send("Server responds");
// });
app.use(express.json());
app.use("/api/user", authRouter);
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});