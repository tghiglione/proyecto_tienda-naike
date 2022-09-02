import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BarraNavegacion from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header className="header">
          <BarraNavegacion/>
        </header>
        <Routes>
          <Route path="/" element={<ItemListContainer titulo='NAIKE'/>}/>
          <Route path="/producto/:tipoProducto" element={<ItemListContainer titulo='NAIKE'/>}/>
          <Route path="/detalle/:idProducto" element={<ItemDetailContainer/>}/>
        </Routes>    
      </div>  
    </BrowserRouter>  
  );
}

export default App;
