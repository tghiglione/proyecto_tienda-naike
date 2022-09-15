import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import './CartWidget.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget= ()=>{
    const {totalItems}=useContext(CartContext)
    const mostrarCarrito=totalItems();

    return(
        mostrarCarrito===0 ? null
        :
        <>
            <Link to="/cart">
                <FontAwesomeIcon className='cartWidget' icon={faCartShopping}/>
            </Link>
            <span className='cartWidgetText'>{mostrarCarrito}</span>      
        </>
    )
}

export default CartWidget;
