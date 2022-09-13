import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './CartItem.css';

const CartItem=({producto})=>{
    const {deleteProduct}=useContext(CartContext);
    return(
        <div className='itemCart'>
            <img src={producto.imagen} alt={producto.nombre} className='itemCart_imagen'/>
            <h3 className='itemCart_nombre'>{producto.nombre}</h3>
            <p className='itemCart_precio'>Precio: ${producto.precio}</p>
            <p className="itemCart_cantidad">Cantidad: {producto.quantity}</p>
            <button onClick={()=>deleteProduct(producto.id)} className='btn_cart'>Eliminar producto</button>
        </div>
    )
};

export default CartItem;