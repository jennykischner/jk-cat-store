import React, { useEffect, useState} from 'react';
import Item from "./Item";


const productos = [
    { id: 1, image: "../src/assets/img/Alimento-1.jpg", name: "Royal Canin Indoor", price: 1500 },
    { id: 2, image: "../src/assets/img/Alimento-2.jpg", name: "Royal Canin Siamese", price: 3500 },
    { id: 3, image: "../src/assets/img/Alimento-3.jpg", name: "Royal Canin Persian", price: 3500},
    { id: 4, image: "../src/assets/img/Alimento-4.jpg", name: "Royal Canin Feline ", price: 2500},
    { id: 5, image: "../src/assets/img/Alimento-5.jpg", name: "Royal Canin Adult", price: 4500 },
    { id: 6, image: "../src/assets/img/Alimento-6.jpg", name: "Royal Canin Kitten", price: 2500}
]


const ItemList = () => {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      
      const fetchData = () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(productos);
          }, 2000); 
        });
      };
  
      fetchData().then((data) => {
        setItems(data);
      });
    }, []);
  
    return (
      <div className="container">
        
        {items.map((item) => (
          <Item key={item.id} name={item.name} price={item.price} image={item.image} />
        ))}
      </div>
    );
  };
  
  export default ItemList;