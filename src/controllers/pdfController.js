import { getTextFromPDF, sendEmail } from "../utils/index.js";
import multer from "multer";

const upload = multer().single('file'); // Helper for file uploads - https://www.npmjs.com/package/multer

const uploadFile = async (req, res) => {
    upload(req, res, async (err) => {
        if (!req.file || !req.body.email) {
            return res.status(400).json({
                success: false,
                message: 'Missig file or email',
            });
        }

        // Checks if the file is a PDF
        if (req.file.mimetype !== 'application/pdf') {
            return res.status(400).json({
                success: false,
                message: 'The uploaded file is not a PDF',
            });
        }

        // Handling multer errors
        if (err instanceof multer.MulterError) {
            return res.status(400).json({
                success: false,
                message: err.message,
            });
        } else if (err) {
            return res.status(500).json({
                success: false,
                message: 'An error has occurred processing your request'
            });
        }

        try {
            const extractedText = await getTextFromPDF(req.file.buffer);
            await sendEmail(req.body.email, extractedText);

            res.json({
                success: true,
                message: `The email has been successfully sent to ${req.body.email}`,
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                success: false,
                message: 'An error has occurred processing your request',
            });
        }
    });
};

export {
    uploadFile,
};