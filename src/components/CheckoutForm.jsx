import React, { useState } from "react";

export const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      phone,
      email,
    };

    onConfirm(userData);
  };

  return (
    <div className="checkoutForm">
      <form onSubmit={handleConfirm} className="checkoutForm__form">
        <label className="card-text">
          Nombre:
          <input
            className="checkoutForm__form--label--input"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>
        <label className="card-text">
          Teléfono:
          <input
           className="card-text"
            type="text"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
          />
        </label>
        <label className="card-text">
          Email:
          <input
            className="card-text"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Por favor ingresa un correo electrónico válido"
            required
          />
        </label>
        <button className="add-to-cart-button" type="submit">
          Finalizar compra
        </button>
      </form>
    </div>
  );
};