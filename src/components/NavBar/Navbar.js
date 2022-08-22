import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/BrandLogo.png';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

function BarraNavegacion() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light">
      <Container className="barraNav">
        <Navbar.Brand href="#home"><img className='logo' src={logo} alt='logo naike'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="barraNav_links">
          <Nav className="barraNav_links">
            <Nav.Link className="barraNav_item item_tienda" href="#tienda">Tienda</Nav.Link>
            <Nav.Link className="barraNav_item" href="#calzado">Calzado</Nav.Link>
            <Nav.Link className="barraNav_item" href="#buzos">Buzos</Nav.Link>
            <Nav.Link className="barraNav_item" href="#remeras">Remeras</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget/>
    </Navbar>
  );
}

export default BarraNavegacion;

