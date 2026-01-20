import express from "express";
import Order from "../schema/order.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { customer, items, subtotal, shipping, total, paymentMethod } = req.body;

    if (!customer || !items || items.length === 0 || !subtotal || !total) {
      return res.status(400).json({ msg: "Missing order data" });
    }

    const order = await Order.create({
      customer,
      items,
      subtotal,
      shipping,
      total,
      paymentMethod
    });

    res.status(201).json({
      msg: "Order placed successfully",
      orderId: order._id
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

export default router;