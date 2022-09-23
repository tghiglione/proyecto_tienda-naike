import React, { useContext, useState } from "react";
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import {Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail=({producto})=>{
    const {addItem}=useContext(CartContext);
    const [cantidad,setCantidad]=useState(0);
    
    const onAdd=(contador)=>{
        const newProduct={...producto,quantity:contador}
        addItem(newProduct)
        setCantidad(contador);
        toast.success('Producto agregado', {
            position: "bottom-center",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    };

    return(
        <>
            <div>
                <img src={producto.imagen} alt={producto.nombre} className='item_imagen'/>
            </div>
            <div>
                <h3 className='item_nombre'>{producto.nombre}</h3>
                <p className='item_precio'>Precio: <span>${producto.precio}</span></p>
                <p className="item_descripcion">{producto.descripcion}</p>
            </div>
            <ItemCount stock={producto.cantidad} inicial={1} onAdd={onAdd}/>
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
            <ToastContainer/>
        </>
    )
};

export default ItemDetail;