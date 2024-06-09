import utils from "../utils/utils.js";

const { getTextFromPDF, sendEmail } = utils;

const uploadFile = async (req, res) => {
    try {
        if (!req.file || !req.body.email) {
            return res.status(400).json({
                success: false,
                message: 'Missig file or email',
            });
        }

        const extractedText = await getTextFromPDF(req.file.buffer);
        console.log(extractedText);
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

export default {
    uploadFile,
};