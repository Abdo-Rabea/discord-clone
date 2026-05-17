import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AuthRequest } from "../types/auth";

const extractToken = (req: Request): string | null => {
  // get token from cookies
  if (req.cookies && req.cookies.token) {
    // todo: remove me after testing (after frontend testing)
    console.log("from cookies", req.cookies);
    return req.cookies.token;
  }

  // get token from authorization header
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    return authHeader.split(" ")[1];
  }

  return null;
};

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = extractToken(req);

    if (!token) {
      res.status(401).json({ message: "No token provided" });
      return;
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "your-secret-key",
    ) as { userId: string };

    req.userId = decoded.userId;

    next();
  } catch (error) {
    next(error);
  }
};
