import { useLocation, Navigate } from "react-router-dom";
import CheckoutForm from "../features/CheckoutForm";
const Checkout = () => {
  const { state } = useLocation();

  if (!state) return <Navigate to="/" />;

  return (
    <CheckoutForm
      cart={state.cart}
      subtotal={state.subtotal}
      shipping={state.shipping}
      grandTotal={state.grandTotal}
    />
  );
};

export default Checkout;
