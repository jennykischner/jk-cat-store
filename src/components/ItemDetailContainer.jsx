import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase/Firebase.jsx";

const ItemDetailContainer = () => {

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const itemRef = doc(db, "productos", id);
        const itemSnapshot = await getDoc(itemRef);

        if (itemSnapshot.exists()) {
          const productData = { ...itemSnapshot.data(), id: itemSnapshot.id }; 
          setProduct(productData);
        } else {
          console.log("Producto no encontrado");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    fetchProduct();
  }, [id]);

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;