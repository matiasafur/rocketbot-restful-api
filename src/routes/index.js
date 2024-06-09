import express from "express";
import multer from "multer";
import pdfController from "../controllers/pdfController.js";

const router = express.Router();
const upload = multer();

// Define a POST route at the /upload path
router.post('/upload', upload.single('file'), pdfController.uploadFile);

export default router;