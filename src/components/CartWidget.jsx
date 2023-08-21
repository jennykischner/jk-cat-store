import { FiShoppingCart } from "react-icons/fi";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContextProvide";

const CartWidget = () => {
  const { totalAmount } = useContext(CartContext);

  return (
    <div className="cart-widget">
      <Link to="/cart" className="carrito__link">
        <FiShoppingCart />
        <p className="carrito__amount">{String(totalAmount)}</p>
      </Link>
    </div>
  );
};

export default CartWidget;