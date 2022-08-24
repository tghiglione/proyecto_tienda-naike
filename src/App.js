import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BarraNavegacion from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import { useState } from 'react';


function App() {
  const [numProductos,setNumProd]=useState(0);

  const agregar=(contador)=>{
    setNumProd(contador);
    alert(`Agregado/s correctamente ${contador} producto/s al carrito`);
  };

  return (
    <div className="App">
      <header className="header">
        <BarraNavegacion/>
      </header>
      <ItemListContainer titulo='NAIKE'/>
      <ItemCount stock={8} inicial={1} agregarProducto={agregar}/>
    </div>
  );
}

export default App;
