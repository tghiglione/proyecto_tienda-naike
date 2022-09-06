import React from "react";
import './ItemDetail.css';
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail=({producto})=>{
    const [numProd,setNumProd]=useState(0);

    const agregarProducto=(contador)=>{
        setNumProd(contador);
        alert(`Agregado/s correctamente ${contador} producto/s al carrito`);
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
            <ItemCount stock={producto.cantidad} inicial={1} agregarProducto={agregarProducto}/>
        </>
    )
};

export default ItemDetail;