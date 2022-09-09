import Item from "../Item/Item";
import './ItemList.css';
import Stock from "../../Stock/Stock";
import { useState, useEffect, React } from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";

const ItemList =()=>{
    const [productos,setProductos]=useState([]);
    const [loading, setLoading]=useState(true);
    const {tipoProducto}=useParams();

    const obtenerStock=()=>{
        return new Promise((res,rej)=>{
            setTimeout(()=>{
                res(Stock);
                setLoading(false);
            },2000);
        })    
    };

    useEffect(()=>{
        const listaStock= async()=>{
            try{
                const listado=await obtenerStock();
                if(tipoProducto===undefined){
                    setProductos(listado)
                }else{
                    const filtro=listado.filter(item=>item.tipo===tipoProducto);
                    setProductos(filtro);
                }    
            }
            catch(error){
                console.log("hubo un error")
            }
        };
        listaStock();
        setLoading(true);
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
