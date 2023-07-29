import React from 'react';
import NavBar from './src/components/NavBar';
import ItemListContainer from './src/components/ItemListContainer';

const App=()=> {
  

  return (
    <>
    <NavBar/>
    <ItemListContainer
    greeting="Bienvenidos a JK Cat Store"/>
    </>
  )
}

export default App
