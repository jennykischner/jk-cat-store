import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addItem = (item) => {
    if (!isInCart(item.id)) {
      const productTotal = item.price * item.amount;
      setCart((prev) => [...prev, { ...item, total: productTotal }]);
    } else {
      console.error("El producto ya fue agregado");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdate = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdate);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const totalAmount = cart.reduce((acc, product) => acc + product.amount, 0);
  const total = cart.reduce(
    (acc, product) => acc + parseFloat(product.price) * product.amount,
    0
  );

  const cartContextValue = {
    cart,
    addItem,
    removeItem,
    clearCart,
    totalAmount,
    total,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
