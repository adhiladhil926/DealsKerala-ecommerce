import express from 'express';
import Contact from '../schema/Contact.js';

const router = express.Router();

router.post("/", async (res, req) => {
    try {
        const { name, email, phone, message } = req.body;

        if (!name || !email || !phone || !message) {
            return res.status(400).json({ msg: "all field are required" });
        }
        await Contact.create({ name, email, phone, message });
        res.status(201).json({ msg: "Contact message sent successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "server error" })

    }
});
export default router;
