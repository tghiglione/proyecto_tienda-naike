import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css'

const CartWidget= ()=>{
    return(
        <>
            <FontAwesomeIcon className='cartWidget' icon={faCartShopping}/>
            <span className='cartWidgetText'>0</span>      
        </>
    )
}

export default CartWidget;
