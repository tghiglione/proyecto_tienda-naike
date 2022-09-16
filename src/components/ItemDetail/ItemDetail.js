import React, { useContext, useState } from "react";
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import {Link} from 'react-router-dom';

const ItemDetail=({producto})=>{
    const {addItem}=useContext(CartContext);
    const [cantidad,setCantidad]=useState(0);
    


    const onAdd=(contador)=>{
        const newProduct={...producto,quantity:contador}
        addItem(newProduct)
        setCantidad(contador)
    };

    return(
        
        <>
            <div>
                <img src={producto.imagen} alt={producto.nombre} className='item_imagen'/>
            </div>
            <div>
                <h3 className='item_nombre'>{producto.nombre}</h3>
                <p className='item_precio'>Precio: ${producto.precio}</p>
                <p className="item_descripcion">{producto.descripcion}</p>
            </div>
            <ItemCount stock={producto.cantidad} inicial={0} onAdd={onAdd}/>
            {
                cantidad>0 &&
                <>
                    <Link to="/cart">
                        <button className="btn-end">Terminar compra</button>
                    </Link>
                    <Link to="/tienda">
                        <button className="btn-continue">Seguir comprando</button>
                    </Link>
                </>
            }
        </>
    )
};

export default ItemDetail;