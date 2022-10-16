import ItemList from '../ItemList/ItemList';
import { useState, useEffect, React } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../utils/firestore";
import './ItemListContainer.css';

function ItemListContainer(){
    const [productos,setProductos]=useState([]);
    const {tipoProducto}=useParams();

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
        listaStock()
    },[tipoProducto]);

    return(
        <>    
            <h1 className="titulo">BIENVENIDOS A NAIKE</h1>
            <ItemList productos={productos}/>
        </>    
    )
};

export default ItemListContainer;