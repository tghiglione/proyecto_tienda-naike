import { doc, getDoc } from "firebase/firestore";
import { useEffect,useState, React } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../utils/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'

const ItemDetailContainer=()=>{
    const [productos,setProductos]=useState([]);
    const {idProducto}=useParams();

    useEffect(()=>{
        const listaStock= async()=>{
            try{
                const query=doc(db,"items",idProducto);
                const response=await getDoc(query);
                const data={...response.data(),id:response.id};
                console.log(data);
                setProductos(data); 
            }
            catch(error){
                console.log("hubo un error",error)
            }
        };
        listaStock();
    },[idProducto]);

    return(

        <div className="item_detail">
            <ItemDetail producto={productos}/>
        </div>   
    )
}

export default ItemDetailContainer;


