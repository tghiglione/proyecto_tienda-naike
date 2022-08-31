import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BarraNavegacion from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import { useState } from 'react';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {

  return (
    <div className="App">
      <header className="header">
        <BarraNavegacion/>
      </header>
      <ItemListContainer titulo='NAIKE'/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
