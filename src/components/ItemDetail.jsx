import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Count from './Count';
import { Card } from 'react-bootstrap'; 

const ItemDetail = ({ productos }) => {
  const { id } = useParams();
  const itemId = parseInt(id);
  const filteredProducts = productos.filter((producto) => producto.id === itemId);

  const [selectedQuantity, setSelectedQuantity] = useState(1); 

  const handleCountChange = (count) => {
    setSelectedQuantity(count);
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
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default ItemDetail;