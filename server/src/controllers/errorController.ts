import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const globalErrorHandler = (
  err: any,
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error("Global error handling middleware function called");
  console.error(err.message);

  let message = err.message || "Internal Server Error";
  let statusCode = err.statusCode || 500;
  let status = err.status || "error";
  let errorStack = err.stack || "";

  if (err instanceof jwt.TokenExpiredError) {
    message = "Token expired";
    statusCode = 401;
  } else if (err instanceof jwt.JsonWebTokenError) {
    message = "Invalid token";
    statusCode = 401;
  }

  res.status(statusCode).json({
    status,
    message,
    errorStack,
  });
};
