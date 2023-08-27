import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  if (!productos || !Array.isArray(productos) || productos.length === 0) {
    return null;
  }

  return (
    <div className="container">
      {productos.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default ItemList;