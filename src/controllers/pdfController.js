import { getTextFromPDF, sendEmail } from "../utils/index.js";

const uploadFile = async (req, res) => {
    try {
        if (!req.file || !req.body.email) {
            return res.status(400).json({
                success: false,
                message: 'Missig file or email',
            });
        }

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
};

export {
    uploadFile,
};