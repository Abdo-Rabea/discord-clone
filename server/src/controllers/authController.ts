import { NextFunction, Request, Response } from "express";
import bcrypt from "bcryptjs";
import { db } from "../utils/prismaClient";
import jwt from "jsonwebtoken";
import * as EmailValidator from "email-validator";
import { AuthRequest } from "../types/auth";
import { AppError } from "../utils/appError";
import catchAsync from "../utils/catchAsync";

// Generate JWT Token
const generateToken = (userId: string) => {
  const secret = process.env.JWT_SECRET || "your-secret-key";
  const expiresIn = (process.env.JWT_EXPIRES_IN ||
    "7d") as jwt.SignOptions["expiresIn"];
  return jwt.sign({ userId }, secret, {
    expiresIn,
  });
};

// SIGNUP
export const signup = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { username, email, password, passwordConfirm } = req.body;

    // Validate input
    if (!username || !email || !password || !passwordConfirm) {
      return next(new AppError("All fields are required", 400));
    }

    // check if password and passwordConfirm match
    if (password !== passwordConfirm) {
      return next(new AppError("Passwords do not match", 400));
    }

    // check if email is valid
    if (!EmailValidator.validate(email)) {
      return next(new AppError("Invalid email format", 400));
    }

    // Check if user already exists
    const existingUser = await db.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    if (existingUser) {
      return next(new AppError("Email or username already exists", 409));
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        profile: {
          create: {
            name: username,
          },
        },
      },
      include: { profile: true },
    });

    // Generate token
    const token = generateToken(user.id);

    res.status(201).json({
      message: "User created successfully",
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        profile: user.profile,
      },
    });
  },
);

// LOGIN
export const login = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return next(new AppError("Email and password are required", 400));
    }

    // Find user
    const user = await db.user.findUnique({
      where: { email },
      include: { profile: true },
    });

    let isPasswordValid = false;
    if (user) {
      // Compare passwords
      isPasswordValid = await bcrypt.compare(password, user.password);
    }
    if (!user || !isPasswordValid) {
      return next(new AppError("Invalid email or password", 401));
    }

    // Generate token
    const token = generateToken(user.id);

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        profile: user.profile,
      },
    });
  },
);

// REFRESH TOKEN
export const refreshToken = catchAsync(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.userId) {
      return next(new AppError("Unauthorized", 401));
    }

    const token = generateToken(req.userId);

    res.status(200).json({
      message: "Token refreshed successfully",
      token,
    });
  },
);
