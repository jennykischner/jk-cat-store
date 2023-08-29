import React from "react";
import Huellitas from "../components/Huellitas";

const Home = () => {
  return (
    <div className="estilo-home">
      <h1 className="titulo-principal">Bienvenidos a JK CAT STORE</h1>
      <div className="Imagen-Principal">
        <img src="../src/assets/img/imagen-1.jpeg" alt="Tienda de mascotas" />
      </div>
      <div className="contenido-principal">
        <div className="texto-izquierda">
          <p className="parrafo-principal">
            En JK CAT STORE ofrecemos una amplia variedad de alimentos y
            accesorios para gatos. Nuestro compromiso es brindar productos de
            alta calidad para el cuidado y bienestar de tus mascotas. ¡Visítanos
            y encuentra todo lo que necesitas para consentir a tu felino!
          </p>
        </div>
        <div className="image-container-principal">
          <img src="../src/assets/img/imagen-2.jpeg" alt="" />
          <img src="../src/assets/img/imagen-6.jpeg" alt="" />
          <img src="../src/assets/img/imagen-4.jpeg" alt="" />
        </div>
        <div className="texto-derecha">
          <p className="parrafo-secundario">
            Nos dedicamos a proveer productos de primera calidad para el
            bienestar de tus amados compañeros peludos. Explora nuestra variedad
            de alimentos y accesorios para tus gatos.
          </p>
        </div>
        <Huellitas />
      </div>
    </div>
  );
};

export default Home;
