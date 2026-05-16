import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { db } from "../utils/prismaClient";
import { AuthRequest } from "../types/auth";

// GET CURRENT USER
export const getCurrentUser = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.userId) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const user = await db.user.findUnique({
      where: { id: req.userId },
      include: { profile: true, members: true },
    });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json({
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        profile: user.profile,
        members: user.members,
      },
    });
  } catch (error) {
    console.error("Get current user error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// UPDATE PROFILE
export const updateProfile = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.userId) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const { name, avatar, bio } = req.body;

    const profile = await db.profile.upsert({
      where: { userId: req.userId },
      update: {
        name: name || undefined,
        avatar: avatar || undefined,
        bio: bio || undefined,
      },
      create: {
        userId: req.userId,
        name,
        avatar,
        bio,
      },
    });

    res.status(200).json({
      message: "Profile updated successfully",
      profile,
    });
  } catch (error) {
    console.error("Update profile error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// GET ALL USERS (for testing/admin purposes)
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await db.user.findMany({
      include: { profile: true },
    });

    res.status(200).json({
      users: users.map((user) => ({
        id: user.id,
        username: user.username,
        email: user.email,
        profile: user.profile,
      })),
    });
  } catch (error) {
    console.error("Get all users error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// DELETE USER
export const deleteUser = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.userId) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const { password } = req.body;

    // Verify password
    const user = await db.user.findUnique({
      where: { id: req.userId },
    });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.status(401).json({ message: "Invalid password" });
      return;
    }

    // Delete user (cascades to profile, members, messages, etc.)
    await db.user.delete({
      where: { id: req.userId },
    });

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Delete user error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
