import { CartContext } from "../features/CartContext";
import { CiTrash } from "react-icons/ci";
import "../style/Cart.css";
import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
const ZONES = {
  North: {
    states: [
      "Jammu & Kashmir",
      "Ladakh",
      "Himachal Pradesh",
      "Punjab",
      "Haryana",
      "Uttarakhand",
      "Uttar Pradesh",
      "Rajasthan",
      "Delhi",
      "Chandigarh"
    ],
    price: 180
  },

  South: {
    states: [
      "Tamil Nadu",
      "Kerala",
      "Karnataka",
      "Andhra Pradesh",
      "Telangana",
      "Puducherry",
      "Lakshadweep"
    ],
    price: 120
  },

  East: {
    states: [
      "West Bengal",
      "Odisha",
      "Bihar",
      "Jharkhand",
      "Assam",
      "Arunachal Pradesh",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Tripura",
      "Sikkim"
    ],
    price: 160
  },
  Central: {
    states: [
      "Madhya Pradesh",
      "Chhattisgarh"
    ],
    price: 140
  },

  West: {
    states: [
      "Maharashtra",
      "Gujarat",
      "Goa"
    ],
    price: 150
  }
};

const Cart = () => {
  const navigate = useNavigate();

  const {
    cart,
    total,
    updateQuantity,
    removeFromCart,
    closeCart,
    isCartOpen
  } = useContext(CartContext);

  const [selectedState, setSelectedState] = useState("");
  const [shipping, setShipping] = useState({
    zone: "",
    price: 0
  });
  const [stateError, setStateError] = useState(false);


  if (!isCartOpen) return null;

  const subtotal = total;
  const grandTotal = subtotal + shipping.price;

const handleStateChange = (state) => {
  setSelectedState(state);
  setStateError(false); 

  for (const zone in ZONES) {
    if (ZONES[zone].states.includes(state)) {
      setShipping({
        zone,
        price: ZONES[zone].price
      });
      return;
    }
  }

  setShipping({ zone: "", price: 0 });
};


  return (
    <div className="cart-overlay" onClick={closeCart}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeCart}>
          ✕
        </button>

        <h1 className="cart-title">My Cart</h1>

        {/*CART ITEMS*/}
        <div className="cart-body">
          {cart.map((item) => (
            <div
              key={`${item.productId}-${item.weight}`}
              className="cart-item"
            >
              <img src={item.image} alt={item.name} />

              <div className="item-info">
                <h3>{item.name}</h3>
                <p>{item.weight}</p>

                <div className="qty-row">
                  <button
                    disabled={item.quantity <= 1}
                    onClick={() =>
                      updateQuantity(
                        item.productId,
                        item.weight,
                        item.quantity - 1
                      )
                    }
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      updateQuantity(
                        item.productId,
                        item.weight,
                        item.quantity + 1
                      )
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="price-box">
                ₹{(item.price * item.quantity).toFixed(2)}
                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromCart(item.productId, item.weight)
                  }
                >
                  <CiTrash size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/*CART TOTALS  */}
        <div className="cart-footer">
          <div className="cart-totals">
            <h3>Cart totals</h3>

            <div className="row">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>

            {/* STATE SELECT */}
          <div className={`row shipping ${stateError ? "error" : ""}`}>
  <span>Shipping State</span>

  <select
    value={selectedState}
    onChange={(e) => handleStateChange(e.target.value)}
  >
    <option value="">-- Select State --</option>
    {Object.values(ZONES).flatMap((zone) =>
      zone.states.map((state) => (
        <option key={state} value={state}>
          {state}
        </option>
      ))
    )}
  </select>

  {stateError && (
    <p className="error-text">Please select a state</p>
  )}
</div>


            {/* ZONE SHIPPING */}
            {shipping.zone && (
              <div className="row">
                <span>
                  Shipping ({shipping.zone} Zone)
                </span>
                <span>₹{shipping.price.toFixed(2)}</span>
              </div>
            )}

            <div className="row total">
              <span>Total</span>
              <span>₹{grandTotal.toFixed(2)}</span>
            </div>
          </div>

          {/* PLACE ORDER */}
          <div className="place-order-container">
            <button
              className="button1"
          onClick={() => {
  if (!cart || cart.length === 0) {
    alert("🛒 Your cart is empty.");
    return;
  }

  if (!shipping.zone) {
    setStateError(true);
    return;
  }

  closeCart();
  navigate("/checkout", {
    state: {
      cart,
      subtotal,
      shipping,
      grandTotal,
      selectedState
    }
  });
}}

            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
