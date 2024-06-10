import express from "express";
import { uploadFile } from "../controllers/index.js";

const router = express.Router();

// POST route for upload a file
router.post('/upload', uploadFile);

export default router;