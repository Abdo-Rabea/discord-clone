// Auth Request interface for routes that require authentication

import { Request } from "express";

export interface AuthRequest extends Request {
  userId?: string;
}
// User types
export interface UserSignupRequest {
  username: string;
  email: string;
  password: string;
}

export interface UserLoginRequest {
  email: string;
  password: string;
}

export interface UserProfileUpdate {
  name?: string;
  avatar?: string;
  bio?: string;
}

export interface JWTPayload {
  userId: string;
  iat?: number;
  exp?: number;
}
