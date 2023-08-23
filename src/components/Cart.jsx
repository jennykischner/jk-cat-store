import React, { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { CartContext } from "../context/CartContextProvide";

const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);

  const calculateSubtotal = (product) => {
    return product.price * product.amount;
  };

  const total = cart.reduce((acc, product) => acc + calculateSubtotal(product), 0);

  return (
    <div className="cart">
      {cart.map((product) => (
        <div key={product.id} className="cart__product">
          <div className="cart__product--info">
            <div className="cart__product--title">
              <h3>{product.title}</h3>
            </div>
            <div className="cart__product--quantity">
              <small>Cantidad</small>
              <p>{isNaN(product.amount) ? 0 : product.amount}</p>
            </div>
            <div className="cart__product--price">
              <small>Precio</small>
              <p>${product.price}</p>
            </div>
            <div className="cart__product--total">
              <small>Total</small>
              <p>${isNaN(product.price) || isNaN(product.amount) ? 0 : calculateSubtotal(product)}</p>
            </div>
            <button className="cart__product--remove" onClick={() => removeItem(product.id)}>
              <FaTrashAlt />
            </button>
          </div>
        </div>
      ))}

      <div className="cart__subtotal">
        <p>Subtotal: ${total}</p>
      </div>
      <div className="cart__total">
        <p>Total de la compra: ${total}</p>
      </div>
      <button className="finalizar-compra-button">Finalizar Compra</button>
    </div>
  );
};

export default Cart;