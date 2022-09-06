import { useEffect,useState, React } from "react";
import { useParams } from "react-router-dom";
import Stock from "../../Stock/Stock";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'

const ItemDetailContainer=()=>{
    const [productos,setProductos]=useState([]);
    const {idProducto}=useParams();

    const getItem=(id)=>{
        return new Promise((res,rej)=>{
            setTimeout(()=>{
                const producto=Stock.find(prod=>prod.id==id);
                res(producto);
            },2000);
        });   
    };

    useEffect(()=>{
        const listaStock= async()=>{
            try{
                const prodFiltrado=await getItem(idProducto);
                setProductos(prodFiltrado); 
            }
            catch(error){
                console.log("hubo un error")
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


