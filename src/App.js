import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BarraNavegacion from './components/NavBar/Navbar';


function App() {
  return (
    <div className="App">
      <header className="header">
        <BarraNavegacion></BarraNavegacion>
      </header>
    </div>
  );
}

export default App;
