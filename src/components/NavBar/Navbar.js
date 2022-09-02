import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/BrandLogo.png';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from "react-router-dom";

function BarraNavegacion() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light">
      <Container className="barraNav">
        <Link to="/">
          <Navbar.Brand><img className='logo' src={logo} alt='logo naike'/></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="barraNav_links">
          <Nav className="barraNav_links">
            <Link to="/" className="barraNav_item item_tienda">Tienda</Link>  
            <Link to="/producto/calzado" className="barraNav_item">Calzado</Link>
            <Link to="/producto/buzos" className="barraNav_item">Buzos</Link>
            <Link to="/producto/remeras" className="barraNav_item">Remeras</Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget/>
    </Navbar>
  );
}

export default BarraNavegacion;

