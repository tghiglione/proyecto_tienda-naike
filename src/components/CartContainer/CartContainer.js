import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import './CartContainer.css';
import {Link} from 'react-router-dom';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../utils/firestore";

const CartContainer=()=>{
    const {productCartList, clearList,total}=useContext(CartContext);
    const [idOrder,setIdOrder]=useState("");

    const sendOrder=(e)=>{
        e.preventDefault();
        const order={
            buyer:{
                name:e.target[0].value,
                surname:e.target[1].value,
                email:e.target[2].value
            },
            items:productCartList,
            precio:total()
        };
        console.log(order)
        const orderCollection=collection(db,"orders");
        addDoc(orderCollection,order).then(res=>setIdOrder(res.id))
        setTimeout(()=>{
            clearList()
        },4000)
    }

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
        <>
            <div className="cartContainer container">
                {
                    productCartList.map(prod=>{
                        return(
                            <CartItem producto={prod}/>     
                        )
                    })
                }
                <button onClick={clearList} className='btn-clean'>VACIAR CARRITO</button>
                <h2 className="precio">El precio final de la compra es de: ${total()}</h2>
            </div>
            <form className="form" onSubmit={sendOrder}>
                <h2 className="form_title">Llene el formulario para finalizar la compra</h2>
                <div className="form_input"><input placeholder="Nombre"/></div>
                <div className="form_input"><input placeholder="Apellido"/></div>
                <div className="form_input"><input placeholder="Email"/></div>
                <button typeof="submit" className="btn-form">Terminar compra</button>
            </form>
            <>
                {
                  idOrder==="" ? 
                    null
                  :
                    <h3 className="pedidoFinal">El pedido ha sido confirmado. Su id de seguimiento es: {idOrder}. Muchas gracias por su compra!</h3>
                }
            </>
            
        </>
    )
}

export default CartContainer;