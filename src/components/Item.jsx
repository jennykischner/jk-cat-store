import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './index.css'

const Item = ({ name, price, image }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Precio: ${price}</Card.Text>
        <Button variant="primary">Detalles</Button>
      </Card.Body>
    </Card>
  );
};

export default Item;