import React from 'react';
import ItemDetail from "./ItemDetail";
import AlimentoImage1 from "../assets/img/Alimento-1.jpg"
import AlimentoImage2 from "../assets/img/Alimento-2.jpg"
import AlimentoImage3 from "../assets/img/Alimento-3.jpg"
import AlimentoImage4 from "../assets/img/Alimento-4.jpg"
import AlimentoImage5 from "../assets/img/Alimento-5.jpg"
import AlimentoImage6 from "../assets/img/Alimento-6.jpg"
import AccesorioImage1 from "../assets/img/Accesorio-1.jpg"
import AccesorioImage2 from "../assets/img/Accesorio-2.jpg"
import AccesorioImage3 from "../assets/img/Accesorio-3.jpg"
import AccesorioImage4 from "../assets/img/Accesorio-4.jpg"
import AccesorioImage5 from "../assets/img/Accesorio-5.jpg"
import AccesorioImage6 from "../assets/img/Accesorio-6.jpg"
import AccesorioImage7 from "../assets/img/Accesorio-7.jpg"
import AccesorioImage8 from "../assets/img/Accesorio-8.jpg"
import AccesorioImage9 from "../assets/img/Accesorio-9.jpg"



const ItemDetailContainer = () => {

  const productos = [
    { id: 1, image: AlimentoImage1, name: "Royal Canin Indoor", price: 1500, category: "alimentos", description:"ejemplo" },
    { id: 2, image: AlimentoImage2, name: "Royal Canin Siamese", price: 3500, category: "alimentos", description:"ejemplo" },
    { id: 3, image: AlimentoImage3, name: "Royal Canin Persian", price: 3500, category: "alimentos", description:"ejemplo"  },
    { id: 4, image: AlimentoImage4, name: "Royal Canin Feline ", price: 2500, category: "alimentos", description:"ejemplo"  },
    { id: 5, image: AlimentoImage5, name: "Royal Canin Adult", price: 4500, category: "alimentos", description:"ejemplo"  },
    { id: 6, image: AlimentoImage6, name: "Royal Canin Kitten", price: 2500, category: "alimentos", description:"ejemplo"  },
    { id: 7, image: AccesorioImage1 , name: "Canil", price: 4500, category: "accesorios", description:"ejemplo"  },
    { id: 8, image: AccesorioImage2 , name: "Mochila", price: 3500, category: "accesorios", description:"ejemplo"  },
    { id: 9, image: AccesorioImage3 , name: "Comedero", price: 1500, category: "accesorios", description:"ejemplo"  },
    { id: 10, image: AccesorioImage4 , name: "Comedero 2", price: 2500, category: "accesorios", description:"ejemplo"  },
    { id: 11, image: AccesorioImage5 , name: "Cama", price: 7000, category: "accesorios", description:"ejemplo"  },
    { id: 12, image: AccesorioImage6 , name: "Cama 2", price: 6450, category: "accesorios", description:"ejemplo"  },
    { id: 13, image: AccesorioImage7 , name: "Trepar", price: 10000, category: "accesorios", description:"ejemplo"  },
    { id: 14, image: AccesorioImage8 , name: "Trepar 2", price: 15000, category: "accesorios", description:"ejemplo"  },
    { id: 15, image: AccesorioImage9 , name: "Juguete", price: 3200, category: "accesorios", description:"ejemplo"  },
  ];

  const getProducts = new Promise((resolve, reject) => {
    if (productos.length > 0){
      setTimeout(() =>{
        resolve(productos)
      },2000)
    }else{
      reject(new Error ("No hay productos"))
    }
  })

  getProducts
    .then((res)=> console.log(res)).catch(error=>console.log(error))

  return (
    <ItemDetail 
    productos={productos}/>
  )
}

export default ItemDetailContainer