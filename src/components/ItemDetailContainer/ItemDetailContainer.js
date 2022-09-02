import { useEffect,useState, React } from "react";
import { useParams } from "react-router-dom";
import Stock from "../../Stock/Stock";
import ItemCount from "../ItemCount/ItemCount";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'

const ItemDetailContainer=()=>{
    const [productos,setProductos]=useState([]);
    const {idProducto}=useParams();
    console.log(idProducto);
    const getItem=()=>{
        return new Promise((res,rej)=>{
            setTimeout(()=>{
                res(Stock);
            },2000);
        });   
    };

    useEffect(()=>{
        const listaStock= async()=>{
            try{
                const listado=await getItem();
                const filtro=listado.find(prod=>prod.id==idProducto);
                setProductos(filtro); 
            }
            catch(error){
                console.log("hubo un error")
            }
        };
        listaStock();
    },[]);

    const [numProd,setNumProd]=useState(0);

    const agregar=(contador)=>{
        setNumProd(contador);
        alert(`Agregado/s correctamente ${contador} producto/s al carrito`);
    };


    return(
        <div className="item_detail">
            <ItemDetail producto={productos}/>
            <ItemCount stock={productos.cantidad} inicial={1} agregarProducto={agregar}/>
        </div>   
    )
}

export default ItemDetailContainer;


