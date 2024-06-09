import nodemailer from "nodemailer";
import { config } from "dotenv";

config();

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
});

export const sendEmail = async (recipient, body) => {
    const mailOptions = {
        from: process.env.MAIL_FROM,
        to: recipient,
        subject: 'Extracted PDF Content',
        text: body,
    };

    await transporter.sendMail(mailOptions);
};