import React from 'react';
import './Item.css';

const Item=({producto})=>{
    return(
        <div className='item'>
            <img src={producto.imagen} alt={producto.nombre} className='item_imagen'/>
            <h3 className='item_nombre'>{producto.nombre}</h3>
            <p className='item_precio'>Precio: ${producto.precio}</p>
            <button className='btn_info'>+info</button>
        </div>
    )
};

export default Item;
