import Item from "../Item/Item";
import './ItemList.css';
import { useState, useEffect, React } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../utils/firestore";


const ItemList =()=>{
    const [productos,setProductos]=useState([]);
    const {tipoProducto}=useParams();
    const [loading, setLoading]=useState(true);

    useEffect(()=>{
        const listaStock= async()=>{
            try{
                let queryRef= tipoProducto===undefined ? collection(db,"items") : query(collection(db,"items"),where("tipo","==",tipoProducto));
                const response=await getDocs(queryRef);
                const docs=response.docs;
                const data=docs.map(doc=>{
                    const newDoc={
                        ...doc.data(),
                        id:doc.id};
                    return newDoc;
                });
                setProductos(data)
            }
            catch(error){
                console.log("hubo un error",error)
            }
        };
        setLoading(false);
        listaStock()
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
