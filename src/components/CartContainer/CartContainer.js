import {React, useContext} from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import './CartContainer.css';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import FormCart from "../FormCart/FormCart";


const CartContainer=()=>{
    const {productCartList, clearList,total}=useContext(CartContext);

    const clearCart=()=>{
        Swal.fire({
            title:'Desea vaciar el carrito de compras?',
            icon:'warning',
            showCancelButton:true,
            position:'top',
            confirmButtonText:'Si, quiero',
            cancelButtonText:'No!'
        }).then((result)=>{
            if(result.isConfirmed){
                clearList();
                Swal.fire({
                    title:'Carrito vaciado correctamente',
                    icon:'success',
                    position:'top',
                    timer:2000,
                    showConfirmButton:false
                });
            };
        });
    }
    return(
        <>
        
            {
                productCartList.length===0 ? 
                <div>
                    <h2 className="carrito_vacio"> NO HAY PRODUCTOS EN EL CARRITO</h2>
                    <div className="link-back">
                        <Link to="/tienda">
                            <button className="btn-back">Volver a la tienda</button>
                        </Link>
                    </div> 
                    
                </div>
                
                :
                <div>
                    <div className="cartContainer container">
                        {
                            productCartList.map(prod=>{
                                return(
                                    <CartItem producto={prod}/>     
                                )
                            })
                        }
                        <button onClick={clearCart} className='btn-clean'>VACIAR CARRITO</button>
                        <h2 className="precio">El precio final de la compra es de: ${total()}</h2>
                    </div>
                </div>
            }
            <FormCart/>
        </>    
        

        
    )
}

export default CartContainer;