import express from "express";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";
import Product from "../schema/product.js";

const router = express.Router();

// create product
router.post("/", adminAuth, upload.array("image", 10), async (req, res) => {
  try {
    const {
      spicesName,
      category,
      brand,
      expire,
      description,
      variants
    } = req.body;

    if (!spicesName || !variants) {
      return res.status(400).json({ msg: "Missing fields" });
    }

    const imageUrls = req.files.map(f => f.path);

    const product = await Product.create({
      spicesName,
      category,
      brand,
      expire,
      description,
      variants: JSON.parse(variants),
      images: imageUrls
    });

    res.json({ msg: "Product created", product });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});
// search product

router.get("/search", async (req, res) => {
  try {
    const query = req.query.q || "";

    const products = await Product.find({
      spicesName: { $regex: query, $options: "i" }
    });

    res.json(products);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

router.put("/:id", adminAuth, upload.array("image", 10), async (req, res) => {
  try {
    const updated = {
      ...req.body,
      variants: req.body.variants ? JSON.parse(req.body.variants) : undefined
    };

    if (req.files.length > 0) {
      updated.images = req.files.map(f => f.path);
    }

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      updated,
      { new: true }
    );

    res.json({ msg: "Updated", product });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// deleate

router.delete("/:id", adminAuth, async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);

    if (!deleted)
      return res.status(404).json({ msg: "Product not found" });

    res.json({ msg: "Product deleted successfully" });

  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});


// get all

router.get("/", async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};

    const products = await Product.find(filter).sort({ createdAt: -1 });

    res.json(products);

  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// single

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product)
      return res.status(404).json({ msg: "Product not found" });

    res.json(product);

  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

export default router;