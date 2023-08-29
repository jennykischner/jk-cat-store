import React, { useEffect, useState, useContext } from "react";
import Count from "./Count";
import { Card } from "react-bootstrap";
import { CartContext } from "../context/CartContextProvide";
import { MdCached } from "react-icons/md";

const ItemDetail = ({ product }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [loading, setLoading] = useState(true); 

  const { addItem } = useContext(CartContext);

  const handleCountChange = (count) => {
    setSelectedQuantity(count);
  };

  const handleAddToCart = (product) => {
    addItem({
      id: product.id,
      title: product.name,
      price: product.price,
      amount: selectedQuantity,
    });
    setAddedToCart(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
      setShowImage(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!product) {
    return (
      <div className="center-container">
        {loading ? <MdCached size="36" className="loading-icon" /> : null}
      </div>
    );
  }


  return (
    <div className="center-container">
     <Card
        key={product.id}
        className={`product-card ${showImage ? 'show' : ''}`}
      >
        <Card.Img
          className={`product-image ${showImage ? "show" : ""}`}
          variant="top"
          src={product.image}
          alt={product.name}
        />
        <Card.Body>
          <Card.Title className="product-title">{product.name}</Card.Title>
          <Card.Text className="product-description">
            {product.description}
          </Card.Text>
          <p>Stock disponible: {product.stock}</p>
          <Count
            initialCount={selectedQuantity}
            onCountChange={handleCountChange}
            maxCount={product.stock}
          />
          <button
            onClick={() => handleAddToCart(product)}
            className="add-to-cart-button"
          >
            Añadir al carrito
          </button>
          {addedToCart && <p>Producto añadido al carrito</p>}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
