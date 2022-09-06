import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import './CartWidget.css'

const CartWidget= ()=>{
    return(
        <>
            <Link to="/cart">
                <FontAwesomeIcon className='cartWidget' icon={faCartShopping}/>
            </Link>
            <span className='cartWidgetText'>0</span>      
        </>
    )
}

export default CartWidget;
