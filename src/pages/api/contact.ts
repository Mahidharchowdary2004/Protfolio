import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'nallapanenimahidhar2004@gmail.com',   
                pass: 'lehd sehz ugow xgzx',         
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: 'nallapanenimahidhar2004@gmail.com',
            subject,
            text: message,
        });

        return res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Email Error:', error); // Helpful for debugging
        return res.status(500).json({ error: 'Failed to send message. Please try again later.' });
    }
}
