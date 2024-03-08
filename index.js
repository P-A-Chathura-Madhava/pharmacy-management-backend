import express from "express";
import env from "dotenv";

const app = express();
const dotenv = env.config();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});