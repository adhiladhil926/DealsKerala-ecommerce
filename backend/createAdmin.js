import bcrypt from "bcrypt";
import User from "./schema/User.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function createAdmin() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const hashedPassword = await bcrypt.hash("dealskerala@123", 10);

    await User.create({
      email: "spices@gmail.com",
      password: hashedPassword,
      role: "admin",
    });

    console.log("Admin Created Successfully");
    process.exit();
  } catch (err) {
    console.error("Error:", err);
    process.exit();
  }
}

createAdmin();
