import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/BrandLogo.png';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import {Link, NavLink} from "react-router-dom";

function BarraNavegacion() {
  const categories=[
    {url:"/", name:"Inicio"},
    {url:"/tienda", name:"Tienda"},
    {url:"/producto/calzado", name:"Calzado"},
    {url:"/producto/buzos", name:"Buzos"},
    {url:"/producto/remeras", name:"Remeras"}
  ];
  const activeStyle={
    color: "#EABE3F",
  };
  
  return (
    <Navbar collapseOnSelect expand="lg" variant="light">
      <Container className="barraNav">
        <Link to="/proyecto_tienda-naike">
          <Navbar.Brand>
            <img className='logo' src={logo} alt='logo naike'/>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="barraNav_links">
          <Nav className="barraNav_links">
          {
            categories.map(category=>(
              <NavLink to={category.url} className="barraNav_item" style={({ isActive }) => isActive ? activeStyle : undefined}>{category.name}</NavLink>
            ))
          }
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget/>
    </Navbar>
  );
}

export default BarraNavegacion;

