import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/AddProduct.css";

const API = `${import.meta.env.VITE_API_URL}/api/products`;

export default function AddProduct() {
  const [products, setProducts] = useState([]);

  // FORM STATES
  const [spicesName, setSpicesName] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [expire, setExpire] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  // VARIANTS
  const [variants, setVariants] = useState([
    { weight: "250g", originalPrice: "", offerPrice: "", stock: "" },
  ]);

  // EDIT MODE
  const [editingId, setEditingId] = useState(null);

  const categories = [
    "Whole Spices",
    "Spices Powder",
    "Spices Masala",
    "Pickle",
    "Ayurveda Spices",
    "Dry Fruits",
    "Oil",
  ];

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await axios.get(API);
    setProducts(res.data);
  };

  const addVariant = () => {
    setVariants([
      ...variants,
      { weight: "", originalPrice: "", offerPrice: "", stock: "" },
    ]);
  };

  const updateVariant = (i, key, value) => {
    const copy = [...variants];
    copy[i][key] = value;
    setVariants(copy);
  };

  const handleImages = (e) => {
    setImages([...e.target.files]);
  };

  const submitProduct = async () => {
    const token = localStorage.getItem("token");
    if (!token) return alert("Admin not logged in");

    if (!spicesName || !expire) {
      return alert("Spice name & expiry are required");
    }

    try {
      const formData = new FormData();
      formData.append("spicesName", spicesName);
      formData.append("category", category);
      formData.append("brand", brand);
      formData.append("expire", expire);
      formData.append("description", description);
      formData.append("variants", JSON.stringify(variants));

      images.forEach((img) => formData.append("image", img));

      if (editingId) {
        // UPDATE
        await axios.put(`${API}/${editingId}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        alert("Product updated successfully!");
      } else {
        // ADD
        await axios.post(API, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        alert("Product added successfully!");
      }

      resetForm();
      fetchProducts();
    } catch (err) {
      console.error(err);
      alert("Failed to save product");
    }
  };

  // ================= EDIT =================
  const editProduct = (p) => {
    setEditingId(p._id);
    setSpicesName(p.spicesName);
    setCategory(p.category);
    setBrand(p.brand);
    setExpire(p.expire);
    setDescription(p.description);
    setVariants(p.variants || []);
    setImages([]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetForm = () => {
    setEditingId(null);
    setSpicesName("");
    setCategory("");
    setBrand("");
    setExpire("");
    setDescription("");
    setImages([]);
    setVariants([{ weight: "250g", originalPrice: "", offerPrice: "", stock: "" }]);
  };

  // ================= DELETE =================
  const deleteProduct = async (id) => {
    const token = localStorage.getItem("token");
    if (!window.confirm("Delete this product?")) return;

    await axios.delete(`${API}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    setProducts(products.filter((p) => p._id !== id));
  };

  // ================= UI =================
  return (
    <div className="add-product-page">
      <h2>{editingId ? "Edit Spice Product" : "Add Spice Product"}</h2>

      <div className="add-form">
        <input
          placeholder="Spice Name"
          value={spicesName}
          onChange={(e) => setSpicesName(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          {categories.map((c, i) => (
            <option key={i}>{c}</option>
          ))}
        </select>

        <input placeholder="Brand" value={brand} onChange={(e) => setBrand(e.target.value)} />

        <input placeholder="Expiry Date" value={expire} onChange={(e) => setExpire(e.target.value)} />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* VARIANTS */}
        <h4>Variants</h4>
        {variants.map((v, i) => (
          <div key={i} className="variant-row">
            <input value={v.weight} onChange={(e) => updateVariant(i, "weight", e.target.value)} />
            <input
              type="number"
              placeholder="Original Price"
              value={v.originalPrice}
              onChange={(e) => updateVariant(i, "originalPrice", e.target.value)}
            />
            <input
              type="number"
              placeholder="Offer Price"
              value={v.offerPrice}
              onChange={(e) => updateVariant(i, "offerPrice", e.target.value)}
            />
            <input
              type="number"
              placeholder="Stock"
              value={v.stock}
              onChange={(e) => updateVariant(i, "stock", e.target.value)}
            />
          </div>
        ))}

        <button className="btn-variant" onClick={addVariant}>➕ Add Variant</button>

        {/* IMAGES */}
        <label className="upload-box">
          <input type="file" multiple onChange={handleImages} />
          <span>📸 Upload Product Images</span>
        </label>
        {/* IMAGE PREVIEW */}
<div  className="image-preview">
  {images.map((img, i) => (
    <img
      key={i}
      src={URL.createObjectURL(img)}
      alt="preview"
      className="preview-img"
    />
  ))}
</div>


        <button className="button1" onClick={submitProduct}>
          {editingId ? "Update Product" : "Add Product"}
        </button>

        {editingId && (
          <button className="button1" onClick={resetForm}>
            Cancel Edit
          </button>
        )}
      </div>

      {/* PRODUCTS */}
      <div className="products-section">
        <h2>All Products</h2>

        <div className="products-grid">
          {products.map((p) => (
            <div key={p._id} className="product-card">
              {p.images?.[0] && <img src={p.images[0]} alt={p.spicesName} />}
              <h4>{p.spicesName}</h4>
              <p>Variants: {p.variants?.length}</p>
              <p>Expiry: {p.expire}</p>

              <div className="action-buttons">
                <button className="btn-edit" onClick={() => editProduct(p)}>
                  Edit
                </button>
                <button className="btn-delete" onClick={() => deleteProduct(p._id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
