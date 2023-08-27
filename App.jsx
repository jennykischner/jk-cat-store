import React from "react";
import NavBar from "./src/components/NavBar";
import ItemListContainer from "./src/components/ItemListContainer";
import ItemDetailContainer from "./src/components/ItemDetailContainer";
import Home from "./src/components/Home";
import Cart from "./src/components/Cart";
import Alimentos from "./src/components/Alimentos";
import Accesorios from "./src/components/Accesorios";
import Contact from "./src/components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./src/context/CartContextProvide";
import { initializeApp } from "firebase/app";

function App() {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCglQRe7HQbtINWpP_aLloIrRfVOTqCrHk",
    authDomain: "jkcat-store.firebaseapp.com",
    projectId: "jkcat-store",
    storageBucket: "jkcat-store.appspot.com",
    messagingSenderId: "913690763940",
    appId: "1:913690763940:web:7e12faf18b23c0496f7c31",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
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
}

export default App;
