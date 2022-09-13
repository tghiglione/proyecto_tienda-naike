import {createContext,useState} from 'react';

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
        const copyArray=[...productCartList];
        const newArray=copyArray.filter(elm=>elm.id!==idProduct)
        setProductCartList(newArray)
    }   

    const clearList=()=>{
        setProductCartList([])
    }

    return(
        <CartContext.Provider value={{productCartList,addItem,deleteProduct,clearList}}>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider;
