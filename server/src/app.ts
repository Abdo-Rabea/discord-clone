import express, { NextFunction } from "express";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes";
import { globalErrorHandler } from "./controllers/errorController";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/users", userRoutes);

// global error handling middleware function
app.use(globalErrorHandler);
export default app;
