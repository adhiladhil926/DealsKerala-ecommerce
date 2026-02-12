import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style/Product.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const categoryFilter = queryParams.get("category");

useEffect(() => {
  window.scrollTo(0, 0);

  const fetchProducts = async () => {
    try {
      let url = `${import.meta.env.VITE_API_URL}/api/products`;
      if (categoryFilter) url += `?category=${categoryFilter}`;

      const res = await fetch(url);
      const data = await res.json();

      // ⏳ FORCE LOADING FOR 2 SECONDS
      setTimeout(() => {
        setProducts(Array.isArray(data) ? data : []);
        setLoading(false);
      }, 2000);

    } catch (err) {
      console.error(err);
      setTimeout(() => setLoading(false), 2000);
    }
  };

  fetchProducts();
}, [categoryFilter]);


  // ✅ SAFE FORMATTER
  const formatPrice = (value) => {
    const num = Number(value);
    return Number.isFinite(num) ? num.toLocaleString() : null;
  };

  return (
    <>
    <div className="products-container">
      <div className="products-grid">
        {loading ? (
<div class="pl">
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__text">Loading…</div>
</div>
        ) : products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          products.map((product) => {
       const firstVariant = product?.variants?.[0];

const original = firstVariant?.originalPrice;
const offer = firstVariant?.offerPrice;


            return (
              <div key={product._id} className="product-card">
                <img
                  src={product.images?.[0]}
                  alt={product.spicesName}
                  className="product-image"
                />

                <h3 className="product-title1">{product.spicesName}</h3>

                <p className="product-description">
                  {product.description?.slice(0, 70)}...
                </p>
              
<p className="product-price">
  {original != null && offer != null && Number(original) > Number(offer) ? (
    <>
      <span className="original-price">
        ₹{formatPrice(original)}
      </span>
      <span className="offer-price">
        ₹{formatPrice(offer)}
      </span>
    </>
  ) : original != null ? (
    <span className="offer-price">
      ₹{formatPrice(original)}
    </span>
  ) : (
    <span className="offer-price">₹0</span>
  )}
</p>


                <button
                  className="button1"
                  onClick={() => navigate(`/product/${product._id}`)}
                >
                  View Product
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
    </>
  );
};

export default Products;
