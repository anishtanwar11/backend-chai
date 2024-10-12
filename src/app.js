import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";

const app = express();

// Middlewares
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// Route Import
import userRouter from "./routes/user.routes.js";


// Define Route
app.use("/api/v1/user", userRouter);


export { app }