import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../style/ProductDetails.css";
import { CartContext } from "../features/CartContext.jsx";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);

  const [zoom, setZoom] = useState({
    show: false,
    x: 0,
    y: 0,
  });

  const { cart, addToCart, updateQuantity } = useContext(CartContext);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/products/${id}`
        );
        const data = await res.json();
        setProduct(data);
        if (data.variants?.length > 0) {
          const defaultVariant =
            data.variants.find(v => v.weight === "250g") ||
            data.variants[0];

          setSelectedVariant(defaultVariant);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleZoom = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setZoom({ show: true, x, y });
  };

  const cartItem = cart.find(
    (item) =>
      item.productId === product?._id &&
      item.weight === selectedVariant?.weight
  );

  const quantity = cartItem ? cartItem.quantity : 1;

  const increaseQty = () => {
    updateQuantity(product._id, selectedVariant.weight, quantity + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      updateQuantity(product._id, selectedVariant.weight, quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, 1);
  };

  const handlePrev = () => {
    setCurrentImage((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImage((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  if (loading) {
    return (
      <div className="loading">
        <span></span><span></span><span></span><span></span><span></span>
      </div>
    );
  }

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-details-container">
      <button className="back-arrow" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="left-column">
        <div
          className="image-slider zoom-source"
          onMouseMove={handleZoom}
          onMouseLeave={() => setZoom({ show: false })}
        >
          <img
            src={product.images[currentImage]}
            alt="Product"
            className="slider-image"
          />
        </div>

        <div className="thumbnail-wrapper">
          <button className="thumb-arrow left" onClick={handlePrev}>❮</button>

          <div className="thumbnail-row">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumbnail"
                className={`thumbnail ${currentImage === index ? "active" : ""
                  }`}
                onClick={() => setCurrentImage(index)}
              />
            ))}


          </div>

          <button className="thumb-arrow right" onClick={handleNext}>❯</button>
        </div>

        {cartItem && (
          <div className="quantity-box">
            <div className="qty-controls">
              <button onClick={decreaseQty}>−</button>
              <span className="qty-value">{quantity}</span>
              <button onClick={increaseQty}>+</button>
            </div>
          </div>
        )}

        <button className="button1" onClick={handleAddToCart}>

          <span className="btn-text-two">add to cart</span>
        </button>
      </div>

      <div className="right-column">
        <h1 className="product-title">{product.spicesName}</h1>

        <div className="price-block">
          {selectedVariant?.originalPrice >
            selectedVariant?.offerPrice && (
              <span className="old-price1">
                ₹{selectedVariant.originalPrice.toLocaleString()}
              </span>
            )}

          <span className="offer-price1">
            ₹{selectedVariant?.offerPrice.toLocaleString()}
          </span>
        </div>
        <hr className="divider" />
        <div className="variant-selector">
          {product.variants.map((variant) => (
            <button
              key={variant.weight}
              className={`variant-btn ${selectedVariant?.weight === variant.weight ? "active" : ""
                }`}
              onClick={() => setSelectedVariant(variant)}
            >
              {variant.weight}
            </button>
          ))}
        </div>
        <div className="product-specs">
          <ul>
            <li>
              <span>Category:</span> {product.category}
            </li>

            <li>
              <span>Brand:</span> {product.brand}
            </li>

            <li>
              <span>Expire:</span> {product.expire}
            </li>

            <li>
              <span>Capacity:</span>{" "}
              {product.variants.map(v => v.weight).join(", ")}
            </li>
          </ul>
        </div>
        {zoom.show && (
          <div className="zoom-preview-right">
            <img
              src={product.images[currentImage]}
              alt="Zoomed"
              style={{
                transform: `translate(-${zoom.x}%, -${zoom.y}%) scale(2)`,
              }}
            />
          </div>
        )}

        <div className="description-box">
          <h3>Description</h3>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
