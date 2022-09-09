import React from 'react';
import './Item.css';
import {Link} from 'react-router-dom';

const Item=({producto})=>{
    return(
        <div className='item'>
            <img src={producto.imagen} alt={producto.nombre} className='item_imagen'/>
            <h3 className='item_nombre'>{producto.nombre}</h3>
            <p className='item_precio'>Precio: ${producto.precio}</p>
            <Link key={producto.id} to={`/detalle/${producto.id}`}>
                <button className='btn_info'>+info</button>
            </Link>
            
        </div>
    )
};

export default Item;
