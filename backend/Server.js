import upload from "./middleware/multer.js";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import productRoutes from "./routes/products.js";
import authRoutes from "./routes/auth.js"
import orderRoutes from "./routes/orders.js";

dotenv.config();
const app = express();
// Middleware
// app.use(cors({
//   origin: [
//     "http://localhost:5173",
//     "http://localhost:5174",
//     "https://deals-kerala-ecommerce.vercel.app",
//     "https://deals-kerala-ecommerce-mtdp4um3m-deals-4b7b45e3.vercel.app"
//   ],
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   credentials: true
// }));

// app.options("*", cors());

const allowedOrigins = [
  "http://localhost:5173",
  "https://dealskerala.com",
  "https://www.dealskerala.com",
  "https://deals-kerala-ecommerce.vercel.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      callback(new Error("CORS not allowed"));
    },
    credentials: true
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post("/upload", upload.single("image"), (req, res) => {
  try {
    console.log("Uploaded file:", req.file);
    res.json({
      message: "File uploaded successfully!",
      fileUrl: req.file.path,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Upload failed" });
  }
});
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Error:", err));

app.get("/", (req, res) => {
  res.send("Server is running.");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
