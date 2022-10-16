import {React, useState, useContext} from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../utils/firestore";
import Swal from 'sweetalert2';
import './FormCart.css';


const FormCart=()=>{
    const [idOrder,setIdOrder]=useState("");
    const {productCartList, clearList,total}=useContext(CartContext);

    const sendOrder= (e)=>{
        e.preventDefault();
        const nombre=e.target[0].value;
        const apellido=e.target[1].value;
        const email=e.target[2].value;
        const order={
            buyer:{
                name:nombre,
                surname:e.target[1].value,
                email:e.target[2].value
            },
            items:productCartList,
            precio:total()
        };
        const expresionEmail= /\w+@\w+\.+[a-z]/;
        const expresionNombre=/^[a-zA-Z ]*$/;

        if((nombre==="" && email==="") || email==="" || apellido==="" || nombre==="" ||(nombre==="" && apellido==="")||(apellido==="" && email==="")){
            Swal.fire({
                title:'Atencion!',
                text:'No completo todos los campos, llene el formulario nuevamente',
                icon:'warning',
                timer:2500,
                showConfirmButton:false,
                position:'top',
            });
        }else if(!expresionEmail.test(email)){
            Swal.fire({
                title:'Atencion!',
                text:'Introduzca un email valido',
                icon:'warning',
                timer:2500,
                showConfirmButton:false,
                position:'top',
            });
        }else if((!expresionNombre.test(nombre)) || (!expresionNombre.test(apellido))){
            Swal.fire({
                title:'Atencion!',
                text:'El nombre y/o apellido no son validos',
                icon:'warning',
                timer:2500,
                showConfirmButton:false,
                position:'top',
            });
        }
        else{
            const orderCollection= collection(db,"orders");
            addDoc(orderCollection,order).then(res=>setIdOrder(res.id));
            clearList();
        } 
        e.target.reset();
    };
    return(
        <>
        {
            productCartList.length!==0 &&
            
                <form className="form" onSubmit={sendOrder}>
                    <h2 className="form_title">Llene el formulario para finalizar la compra</h2>
                    <div className="form_input"><input type="text" placeholder="Nombre"/></div>
                    <div className="form_input"><input type="text" placeholder="Apellido"/></div>
                    <div className="form_input"><input type="email" placeholder="Email"/></div>
                    <button typeof="submit" className="btn-form">Terminar compra</button>
                </form> 
        }
        {
            idOrder===""  ?
            null
            :
            <h3 className="pedidoFinal">El pedido ha sido confirmado. Su id de seguimiento es: {idOrder}. Muchas gracias por su compra!</h3>  
        }
        </>
        
        
    )
}

export default FormCart;