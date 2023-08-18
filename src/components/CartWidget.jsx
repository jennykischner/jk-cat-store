import { FiShoppingCart } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const { totalAmount } = useContext(CartContext);

  return (
    <div className="carrito">
      <Link to="/cart" className="carrito__link">
      <FiShoppingCart/>
        <p>{totalAmount}</p>
      </Link>
    </div>
  );
};

export default CartWidget;