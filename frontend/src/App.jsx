import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./features/Navbar.jsx";
import Footer from "./features/Footer.jsx";
import Home from "./components/Home.jsx";
import Product from "./components/Product.jsx";
import Contact from "./components/ContactUs.jsx";
import About from "./components/About.jsx";
import { CartProvider } from "./features/CartContext.jsx";
import ProductDetails from "./features/ProductDetails.jsx";
import AdminLogin from "./components/AdminLogin.jsx";
import AddProduct from "./features/AddProduct.jsx";
import ProtectedRoute from "./routs/ProtectedRoute.jsx";
import Cart from "./components/Cart.jsx";
import CheckoutPage from "./components/CheckoutPage.jsx";
import Terms from "./features/Terms.jsx";
import Privacy from "./features/Privacy.jsx";
import Return from "./features/Return.jsx"
import Ship from "./features/Ship.jsx"

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Cart />
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
               <Route path="/return" element={<Return/>} />
                 <Route path="/ship" element={<Ship/>} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/products"
            element={
              <ProtectedRoute>
                <AddProduct />
              </ProtectedRoute>
            }
          />
        </Routes>

        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
