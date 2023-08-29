import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";

const Item = ({ id, name, price, image }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} alt={name} />

      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Precio: ${price}</Card.Text>

        <Link to={`/items/${id}`}>
          <Button className="card-button">Detalles</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
