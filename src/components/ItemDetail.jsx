import React, { useState, useContext } from 'react'; 
import Count from './Count';
import { Card } from 'react-bootstrap'; 
import { CartContext } from '../context/CartContextProvide';


const ItemDetail = ({ product }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1); 
  const [addedToCart, setAddedToCart] = useState(false);

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

  if (!product) {
    return <p>Cargando...</p>; 
  }

  return (
    <div className="center-container">
      <Card key={product.id} className="product-card"> 
        <Card.Img className="product-image" variant="top" src={product.image} alt={product.name}  />
        <Card.Body>
          <Card.Title className="product-title">{product.name}</Card.Title>
          <Card.Text className="product-description">{product.description}</Card.Text>
          <Count  initialCount={selectedQuantity} onCountChange={handleCountChange}  />
          <button onClick={() => handleAddToCart(product)} className="add-to-cart-button">Añadir al carrito</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;