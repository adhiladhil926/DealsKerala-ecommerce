import mongoose from "mongoose";

const variantSchema = new mongoose.Schema({
  weight: { type: String, required: true },
  originalPrice: { type: Number, required: true },
  offerPrice: { type: Number, required: true },
  stock: { type: Number, default: 0 }
});

const productSchema = new mongoose.Schema({
  spicesName: { type: String, required: true },
  category: { type: String, required: true },
  brand: { type: String, required: true },

  variants: [variantSchema],   

  expire: { type: String, required: true },
  description: { type: String, required: true },
  images: [String],
}, { timestamps: true });

export default mongoose.model("Product", productSchema);
