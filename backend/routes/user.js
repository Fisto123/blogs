import express from "express";
import { auth, verify } from "../verify.js";
import {
  deleteUser,
  getAllUsers,
  getUserId,
  updateUser,
} from "../controllers/user.js";
const router = express.Router();

router.get("/api/getUsers", auth, verify, getAllUsers);
router.delete("/api/deleteUser/:id", auth, verify, deleteUser);
router.get("/api/getUserId/:id", auth, verify, getUserId);
router.put("/api/updateUser/:id", auth, verify, updateUser);

export default router;
