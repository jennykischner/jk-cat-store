import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext({
  cart: [],
});

export let inCart = true;

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  const addItem = (item, amount) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, amount }]);
      inCart = true;
    } else {
      console.error("El producto ya fue agregado");
      inCart = false;
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

  const totalAmount = cart.reduce((acc, producto) => acc + producto.amount, 0);

  const total = cart.reduce(
    (acc, producto) => acc + parseFloat(producto.price) * producto.amount,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, totalAmount, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
