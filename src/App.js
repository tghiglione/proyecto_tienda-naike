import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BarraNavegacion from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <header className="header">
        <BarraNavegacion/>
      </header>
      <ItemListContainer titulo='NAIKE'/>
    </div>
  );
}

export default App;
