import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import './CartContainer.css';

const CartContainer=()=>{
    const {productCartList, clearList}=useContext(CartContext);

    return(
        <div className="cartContainer container">
            {
                productCartList.map(prod=>{
                    return(
                        <CartItem producto={prod}/>     
                    )
                })
            }
            <button onClick={clearList} className='btn-clean'>VACIAR CARRITO</button>
        </div>
    )
}

export default CartContainer;