import express from "express";
import dotenv from "dotenv";
import authRoutes from  "./src/routes/auth.route.js"
import { connectDB } from "./src/lib/db.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT

app.use("/api/auth",authRoutes)

app.listen(PORT,async()=>
{
    console.log("server is running in PORT:"+PORT);
    connectDB();
});
