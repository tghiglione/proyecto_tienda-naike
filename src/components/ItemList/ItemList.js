import Item from "../Item/Item";
import './ItemList.css';
import Stock from "../../Stock/Stock";
import { useState, useEffect, React } from "react";

const ItemList =()=>{
    const [productos,setProductos]=useState([]);

    const obtenerStock=()=>{
        return new Promise((res,rej)=>{
            setTimeout(()=>{
                res(Stock);
            },2000);
        })    
    };

    useEffect(()=>{
        const listaStock= async()=>{
            try{
                const listado=await obtenerStock();
                setProductos(listado);
            }
            catch(error){
                console.log("hubo un error")
            }
        };
        listaStock();
    },[]);

    return(
        <div className="item_list">
            {
                productos.map(prod=>{
                    return(
                        <Item producto={prod}/> 
                    )
                })
            }
        </div>
    )
};

export default ItemList;
