import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Firebase/Firebase.jsx";
import { MdCached } from "react-icons/md";

const ItemListContainer = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemCollection = collection(db, "productos");

        let collectionRef = itemCollection;
        if (category) {
          collectionRef = query(
            collectionRef,
            where("category", "==", category)
          );
        }

        const snapshot = await getDocs(collectionRef);
        const productsData = snapshot.docs.map((doc) => {
          const data = doc.data();
          return { ...data, id: doc.id };
        });

        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className="flex flex-col p-10">
      <div>
        {loading ? (
          <div className="center-container">
            {loading ? <MdCached size="36" className="loading-icon" /> : null}
          </div>
        ) : (
          <ItemList productos={products} />
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
