import express, { NextFunction } from "express";
import userRoutes from "./routes/userRoutes";

const app = express();

app.use(express.json());

app.use("/api/v1/users", userRoutes);

// global error handling middleware function
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: NextFunction,
  ) => {
    console.error("Global error handling middleware function called");
    console.error(err.message);

    res.status(err.statusCode || 500).json({
      status: err.status || "error",
      message: err.message || "Internal Server Error",
      errorStack: err.stack,
    });
  },
);
export default app;
