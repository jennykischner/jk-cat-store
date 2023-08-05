import React from 'react';
import ItemList from './ItemList';

const productos = [
  { id: 1, image: "../src/assets/img/Alimento-1.jpg", name: "Royal Canin Indoor", price: 1500, categoria: "alimentos" },
  { id: 2, image: "../src/assets/img/Alimento-2.jpg", name: "Royal Canin Siamese", price: 3500, categoria: "alimentos"},
  { id: 3, image: "../src/assets/img/Alimento-3.jpg", name: "Royal Canin Persian", price: 3500, categoria: "alimentos" },
  { id: 4, image: "../src/assets/img/Alimento-4.jpg", name: "Royal Canin Feline ", price: 2500, categoria: "alimentos" },
  { id: 5, image: "../src/assets/img/Alimento-5.jpg", name: "Royal Canin Adult", price: 4500, categoria: "alimentos" },
  { id: 6, image: "../src/assets/img/Alimento-6.jpg", name: "Royal Canin Kitten", price: 2500, categoria: "alimentos" },
  { id: 7, image: "../src/assets/img/Accesorio-1.jpg", name: "Canil", price: 4500, categoria: "accesorios" },
  { id: 8, image: "../src/assets/img/Accesorio-2.jpg", name: "Mochila", price: 3500, categoria: "accesorios" },
  { id: 9, image: "../src/assets/img/Accesorio-3.jpg", name: "Comedero", price: 1500, categoria: "accesorios" },
  { id: 10, image: "../src/assets/img/Accesorio-4.jpg", name: "Comedero 2", price: 2500, categoria: "accesorios" },
  { id: 11, image: "../src/assets/img/Accesorio-5.jpg", name: "Cama", price: 7000, categoria: "accesorios" },
  { id: 12, image: "../src/assets/img/Accesorio-6.jpg", name: "Cama 2", price: 6450, categoria: "accesorios" },
  { id: 13, image: "../src/assets/img/Accesorio-7.jpg", name: "Trepar", price: 10000, categoria: "accesorios" },
  { id: 14, image: "../src/assets/img/Accesorio-8.jpg", name: "Trepar 2", price: 15000, categoria: "accesorios" },
  { id: 15, image: "../src/assets/img/Accesorio-9.jpg", name: "Juguete", price: 3200, categoria: "accesorios" },
];


const ItemListContainer = ({ greeting, category }) => {
 
  const filteredProducts = productos.filter(
    (producto) => producto.categoria === category
  );

  return (
    <div>
      <p className='titulo-pricipal'>{greeting}</p>

      <ItemList productos={filteredProducts} />
    </div>
  );
};

export default ItemListContainer;