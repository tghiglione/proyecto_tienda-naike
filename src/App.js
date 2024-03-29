import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BarraNavegacion from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Home from "./components/Home/Home";
import Footer from './components/Footer/Footer';
import CartContainer from './components/CartContainer/CartContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CartProvider from './context/CartContext';


function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <header>
            <BarraNavegacion/>
          </header>
          <Routes>
            <Route path="/proyecto_tienda-naike" element={<Home/>}/>
            <Route path="/tienda" element={<ItemListContainer/>}/>
            <Route path="/producto/:tipoProducto" element={<ItemListContainer/>}/>
            <Route path="/detalle/:idProducto" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<CartContainer/>}/>
          </Routes>
          <footer>
            <Footer/>
          </footer>   
        </div>  
      </BrowserRouter>
    </CartProvider>  
  );
}

export default App;
