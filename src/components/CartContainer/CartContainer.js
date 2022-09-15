import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import './CartContainer.css';
import {Link} from 'react-router-dom';

const CartContainer=()=>{
    const {productCartList, clearList,total}=useContext(CartContext);

    return(
        productCartList.length===0 ? 
        <>
            <h2 className="carrito_vacio"> NO HAY PRODUCTOS EN EL CARRITO</h2>
            <div className="link-back">
                <Link to="/tienda">
                    <button className="btn-back">Volver a la tienda</button>
                </Link>
            </div> 
            
        </>
        
        :
        <div className="cartContainer container">
            {
                productCartList.map(prod=>{
                    return(
                        <CartItem producto={prod}/>     
                    )
                })
            }
            <button onClick={clearList} className='btn-clean'>VACIAR CARRITO</button>
            <h2>El precio final de la compra es de: ${total()}</h2>
        </div>
    )
}

export default CartContainer;