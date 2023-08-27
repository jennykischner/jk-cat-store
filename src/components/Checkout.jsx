import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContextProvide";
import ImagenIndependiente from "../components/ImagenIndependiente";
import { CheckoutForm } from "./CheckoutForm";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase/Firebase";
import { Timestamp } from "firebase/firestore";

export const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      
      const order = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart.map((product) => ({
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: product.amount,
        })),
        total: total,
        date: Timestamp.now(),
      };


      const orderRef = await addDoc(collection(db, "orders"), order);
      setOrderId(orderRef.id);
      clearCart();
    } catch (error) {
      console.error("Error creating order:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1 className="text-orden">Procesando la orden...</h1>;
  }

  if (orderId) {
    return <h1 className="text-orden">Orden creada con éxito. ID: {orderId}</h1>;
  }

  return (
    <div>
      <h2 className="card-text" >Checkout</h2>
      <CheckoutForm onConfirm={createOrder} />

    </div>
  );
};
