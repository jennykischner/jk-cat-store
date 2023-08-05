import React from 'react';
import ItemListContainer from './ItemListContainer';

const Alimentos = () => {
  return (
    <div>
      <h1>Alimentos</h1>
      <ItemListContainer greeting="¡Bienvenido a la sección de Alimentos!" category="alimentos" />
    </div>
  );
};

export default Alimentos;