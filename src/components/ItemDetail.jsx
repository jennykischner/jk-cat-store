import React, { useState, useContext } from 'react'; 
import { useParams } from 'react-router-dom';
import Count from './Count';
import { Card } from 'react-bootstrap'; 
import { CartContext } from '../context/CartContextProvide';

const ItemDetail = ({ productos }) => {
  const { id } = useParams();
  const itemId = parseInt(id);
  const filteredProducts = productos.filter((producto) => producto.id === itemId);

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

  return (
    <>
      {filteredProducts.map((p) => (
        <Card key={p.id}> 
          <Card.Img variant="top" src={p.image} alt={p.name} />
          <Card.Body>
            <Card.Title>{p.name}</Card.Title>
            <Card.Text>{p.description}</Card.Text>
            <Count initialCount={selectedQuantity} onCountChange={handleCountChange} />
            <button onClick={() => handleAddToCart(p)}>Añadir al carrito</button>
            {addedToCart && <p>Producto añadido al carrito</p>}
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default ItemDetail;








