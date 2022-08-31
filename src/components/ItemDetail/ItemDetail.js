import React from "react";
import './ItemDetail.css'

const ItemDetail=({producto})=>{

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
        </>
    )
};

export default ItemDetail;