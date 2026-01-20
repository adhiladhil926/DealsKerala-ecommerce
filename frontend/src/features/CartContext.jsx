import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [total, setTotal] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const t = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const q = cart.reduce((sum, item) => sum + item.quantity, 0);

    setTotal(t);
    setCartQuantity(q);
  }, [cart]);

  // ADD TO CART
  const addToCart = (product, variant, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.productId === product._id && item.weight === variant.weight
      );

      if (existing) {
        return prev.map((item) =>
          item.productId === product._id && item.weight === variant.weight
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }

      return [
        ...prev,
        {
          productId: product._id,
          name: product.spicesName,
          image: product.images[0],
          weight: variant.weight,
          price: Number(variant.offerPrice),
          quantity: qty,
        },
      ];
    });

  };

  const updateQuantity = (productId, weight, quantity) => {
    if (quantity < 1) return;

    setCart((prev) =>
      prev.map((item) =>
        item.productId === productId && item.weight === weight
          ? { ...item, quantity }
          : item
      )
    );
  };

  const removeFromCart = (productId, weight) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.productId === productId && item.weight === weight)
      )
    );
  };
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };


  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        cartQuantity,
        addToCart,
        updateQuantity,
        removeFromCart,
        isCartOpen,
        clearCart,
        openCart,
        closeCart,
        toggleCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
