import Item from "../Item/Item";
import './ItemList.css';
import { useState, useEffect, React } from "react";
import { useParams } from "react-router-dom";

const ItemList =({productos})=>{
    const {tipoProducto}=useParams(); 
    const [loading, setLoading]=useState(true);

    useEffect(()=>{
        setLoading(false);
    },[tipoProducto]);

    return(
        loading ? <p className="loading">cargando productos...</p>
        : 
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
