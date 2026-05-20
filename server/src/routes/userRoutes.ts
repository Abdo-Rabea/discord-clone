import express from "express";
import {
  getCurrentUser,
  updateProfile,
  getAllUsers,
  deleteUser,
} from "../controllers/userController";
import { authMiddleware } from "../middleware/authMiddleware";
import {
  login,
  refreshToken,
  signup,
  logout,
} from "../controllers/authController";

const router = express.Router();

// Public routes
router.post("/signup", signup);
router.post("/login", login);

// Protected routes (require authentication)
router.post("/logout", authMiddleware, logout);
router.get("/me", authMiddleware, getCurrentUser);
router.put("/profile", authMiddleware, updateProfile);
router.delete("/delete-me", authMiddleware, deleteUser);
router.post("/refresh-token", authMiddleware, refreshToken);

// Admin routes (for testing)
// todo: remove me
router.get("/", getAllUsers);

export default router;
