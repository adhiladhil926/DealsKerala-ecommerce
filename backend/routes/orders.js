import express from "express";
import Order from "../schema/order.js";
import { sendCustomerEmail, sendOwnerEmail } from "../utils/mailer.js"; // ✅ FIXED

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    // console.log("📦 Order API hit");
    // console.log("📥 Request body:", req.body);

    const { customer, items, subtotal, shipping, total, paymentMethod } = req.body;

    if (!customer || !items || items.length === 0 || !subtotal || !total) {
      return res.status(400).json({ msg: "Missing order data" });
    }

    const { name, address, email, phone, state, pincode } = customer;

    if (!name || !address || !email || !phone || !state || !pincode) {
      return res.status(400).json({
        msg: "All customer fields are required"
      });
    }

    const order = await Order.create({
      customer: {
        name,
        address,
        email,
        phone,
        state,
        pincode,
        gst: customer.gst || ""
      },
      items,
      subtotal,
      shipping,
      total,
      paymentMethod
    });

    console.log("✅ Order saved");
    console.log("📧 Sending emails for:", email);

    // ✅ SEND EMAILS
    await sendCustomerEmail(order);
    await sendOwnerEmail(order);

    console.log("📨 Emails sent successfully");

    res.status(201).json({
      msg: "Order placed successfully",
      orderId: order._id
    });

  } catch (err) {
    console.error("🔥 ORDER ERROR:", err);
    res.status(500).json({ msg: err.message });
  }
});

export default router;