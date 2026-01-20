import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    // Customer form data
    customer: {
      name: {
        type: String,required: true, trim: true },
      address: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        lowercase: true
      },
      phone: {
        type: String,
        required: true
      },
      state: {
        type: String,
        required: true
      },
      pincode: {
        type: String,
        required: true
      },
      gst: {
        type: String,
        default: ""
      }
    },

    // Payment method from form
    paymentMethod: {
      type: String,
      enum: ["COD", "ONLINE", "PREPAID"],
      default: "COD"
    },

    // Cart items
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true
        },
        name: String,
        weight: String,
        price: Number,
        quantity: Number,
        image: String
      }
    ],

    // Pricing
    subtotal: {
      type: Number,
      required: true
    },

    shipping: {
      label: String,
      price: Number
    },

    total: {
      type: Number,
      required: true
    },

    // Order status
    status: {
      type: String,
      default: "Pending"
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Order", orderSchema);
