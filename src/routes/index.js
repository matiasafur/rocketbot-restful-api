import express from "express";
import multer from "multer";
import { uploadFile } from "../controllers/index.js";

const router = express.Router();
const upload = multer(); // Helper for file uploads - https://www.npmjs.com/package/multer

// POST route for upload a file
router.post('/upload', upload.single('file'), uploadFile);

export default router;