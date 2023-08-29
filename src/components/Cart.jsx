import React, { useContext, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { CartContext } from "../context/CartContextProvide";
import ImagenIndependiente from "../components/ImagenIndependiente";
import { CheckoutForm } from "./CheckoutForm";
import { Checkout } from "./Checkout";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase/Firebase";

const Cart = () => {
  const { cart, removeItem, clearCart } = useContext(CartContext);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);

  const calculateSubtotal = (product) => {
    return product.price * product.amount;
  };

  const total = cart.reduce(
    (acc, product) => acc + calculateSubtotal(product),
    0
  );

  const handlePlaceOrder = async (userData) => {
    try {
      const order = {
        buyer: {
          name: userData.name,
          phone: userData.phone,
          email: userData.email,
        },
        items: cart.map((product) => ({
          id: product.id,
          title: product.title,
          price: product.price,
        })),
        date: new Date().toISOString(),
        total: total,
      };

      const orderRef = await addDoc(collection(db, "orders"), order);
      setOrderNumber(orderRef.id);

      clearCart();

      setShowCheckout(false);
      setShowSuccessMessage(true);
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

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
              <p>
                $
                {isNaN(product.price) || isNaN(product.amount)
                  ? 0
                  : calculateSubtotal(product)}
              </p>
            </div>
            <button
              className="cart__product--remove"
              onClick={() => removeItem(product.id)}
            >
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

      {showSuccessMessage ? (
        <div className="order-success">
          <p>Tu pedido ha sido realizado con éxito.</p>
          <p>Número de pedido: {orderNumber}</p>
        </div>
      ) : (
        <>
          {!showCheckout ? (
            <button
              className="finalizar-compra-button"
              onClick={() => setShowCheckout(true)}
            >
              Finalizar Compra
            </button>
          ) : (
            <Checkout
              cart={cart}
              total={total}
              setOrderNumber={setOrderNumber}
              setShowSuccessMessage={setShowSuccessMessage}
              setShowCheckout={setShowCheckout}
              onConfirm={handlePlaceOrder}
            />
          )}
        </>
      )}

      <ImagenIndependiente />
    </div>
  );
};

export default Cart;
