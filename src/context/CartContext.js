import {createContext,useState} from 'react';
import Swal from 'sweetalert2';

export const CartContext=createContext();

const CartProvider=({children})=>{
    const [productCartList,setProductCartList]=useState([]);

    const isInCart=(productId)=>{
        const productIndex=productCartList.findIndex(elm=>elm.id===productId);
        if(productIndex>=0){
            return {exists:true,index:productIndex}
        }else{
            return {exists:false,index:undefined}
        }  
    };

    const addItem=(product)=>{
        const inCartProduct=isInCart(product.id);
        if(inCartProduct.exists){
            const productListCopy=[...productCartList];
            productListCopy[inCartProduct.index].quantity=productListCopy[inCartProduct.index].quantity+product.quantity;
            setProductCartList(productListCopy);
        }else{
            const newCartList=[...productCartList];
            newCartList.push(product);
            setProductCartList(newCartList);
        }
    };

    const deleteProduct=(idProduct)=>{
        Swal.fire({
            title:'Desea eliminar el producto?',
            icon:'warning',
            showCancelButton:true,
            position:'top',
            confirmButtonText:'Si, quiero',
            cancelButtonText:'No!'
        }).then((result)=>{
            if(result.isConfirmed){
                const copyArray=[...productCartList];
                let productInCart=copyArray.find((elm)=>elm.id===idProduct); 
                productInCart.quantity>1 ? productInCart.quantity-- : copyArray.splice(copyArray.indexOf(productInCart),1);
                setProductCartList(copyArray)
                Swal.fire({
                    title:'Producto eliminado!',
                    icon:'success',
                    position:'top',
                    timer:1500,
                    showConfirmButton:false
                });
            }
        });
    }   

    const clearList=()=>{
        Swal.fire({
            title:'Desea vaciar el carrito de compras?',
            icon:'warning',
            showCancelButton:true,
            position:'top',
            confirmButtonText:'Si, quiero',
            cancelButtonText:'No!'
        }).then((result)=>{
            if(result.isConfirmed){
                setProductCartList([])
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

    const total=()=>{
        const totalCompra=[];
        for(let product of productCartList){
            const totalPrice=product.quantity*product.precio;
            totalCompra.push(totalPrice);
        }
        const precioFinal=totalCompra.reduce((acc,elm)=>acc+elm,0);
        return precioFinal;
    }
    
    const totalItems=()=>{
        const cantidadItems=productCartList.reduce((acc,elm)=>acc+elm.quantity,0);
        return cantidadItems;
    }

    return(
        <CartContext.Provider value={{productCartList,addItem,deleteProduct,clearList,total,totalItems}}>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider;

