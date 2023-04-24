import express from "express";
import {
  createNews,
  getLatestNews,
  getNewsById,
  getNewsCategory,
  getTopNews,
} from "../controllers/News.js";
import { auth, verify } from "../verify.js";
const router = express.Router();

router.post("/api/createNews", auth, verify, createNews);
router.get("/api/getLatestNews", auth, getLatestNews);
router.get("/api/getTopNews", auth, getTopNews);
router.get("/api/getNewsCategory", auth, getNewsCategory);
router.get("/api/getNewsById/:id", auth, getNewsById);

export default router;
