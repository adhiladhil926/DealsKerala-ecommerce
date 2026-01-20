import { useState, useContext } from "react";
import { CartContext } from "../features/CartContext";
import "../style/CheckoutForm.css";



const CheckoutForm = ({ cart, subtotal, shipping, grandTotal }) => {
  const { clearCart } = useContext(CartContext);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    state: "",
    pincode: "",
    paymentMethod: "COD",
    gst: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //  EMPTY CART CHECK
    if (!cart || cart.length === 0) {
      alert("🛒 Your cart is empty. Please add items before checkout.");
      return;
    }

    const customer = {
      name: formData.name,
      address: formData.address,
      email: formData.email,
      phone: formData.phone,
      state: formData.state,
      pincode: formData.pincode,
      gst: formData.gst
    };

    const items = cart.map(item => ({
      productId: item.productId,
      name: item.name,
      weight: item.weight,
      price: item.price,
      quantity: item.quantity,
      image: item.image
    }));

    const res = await fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customer,
        items,
        subtotal,
        shipping,
        total: grandTotal,
        paymentMethod: formData.paymentMethod
      })
    });

    if (res.ok) {
      alert("✅ Order placed successfully!");
      clearCart(); 
    } else {
      alert("❌ Order failed");
    }
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h2>Secure Checkout</h2>

      <input name="name" placeholder="Full Name" onChange={handleChange} required />
      <textarea name="address" placeholder="Complete Address" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input name="phone" placeholder="Phone" onChange={handleChange} required />

      {/* <select name="state" onChange={handleChange} required>
        <option value="">Select State</option>
        {states.map(s => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select> */}

      <input name="pincode" placeholder="Pincode" onChange={handleChange} required />

      <select name="paymentMethod" onChange={handleChange}>
        <option value="PREPAID">PREPAID</option>
        <option value="ONLINE">Online Payment</option>
        <option value="COD">COD</option>
      </select>

      <input name="gst" placeholder="GST (Optional)" onChange={handleChange} />

     <div className="checkout-totals">
  <h3>Order Summary</h3>

  <div className="row">
    <span>Subtotal</span>
    <span>₹{subtotal?.toFixed(2) || '0.00'}</span>
  </div>

  <div className="row">
    <span>Shipping</span>
    <span>₹{shipping?.price?.toFixed(2) || '0.00'}</span>
  </div>

  <div className="row total">
    <span>Total</span>
    <span>₹{grandTotal?.toFixed(2) || '0.00'}</span>
  </div>
</div>

<button className="button11" type="submit">
  Confirm Order ₹{grandTotal?.toFixed(2) || '0.00'}
</button>

    </form>
  );
};

export default CheckoutForm;
