import React from "react";
import NavBar from "./src/components/NavBar";
import ItemListContainer from "./src/components/ItemListContainer";
import ItemDetailContainer from "./src/components/ItemDetailContainer";
import Home from "./src/components/Home";
import Cart from "./src/components/Cart";
import CartWidget from "./src/components/CartWidget"; 
import Alimentos from "./src/components/Alimentos";
import Accesorios from "./src/components/Accesorios";
import Contact from "./src/components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./src/context/CartContextProvide";

const App = () => {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <CartWidget />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="/items" element={<ItemListContainer />} />
        <Route path="/items/:id" element={<ItemDetailContainer />} /> 
        <Route path="/alimentos" element={<Alimentos />} />
        <Route path="/accesorios" element={<Accesorios />} />
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;



