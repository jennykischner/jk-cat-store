import { FaTrashAlt } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Cart = ({ id, title, price, amount }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="carrito">
      <div id="carrito__productos" className="carrito__prod">
        <div className="carrito__prod--titulo">
          <h3>{title}</h3>
        </div>
        <div className="carrito__prod--cant">
          <small>Cantidad</small>
          <p>{amount}</p>
        </div>
        <div className="carrito__prod--precio">
          <small>Precio</small>
          <p>${price}</p>
        </div>
        <div className="carrito__prod--subtotal">
          <small>Subtotal</small>
          <p>${price * amount}</p>
        </div>
        <button
          className="carrito__prod--eliminar"
          onClick={() => removeItem(id)}
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};
