import { useEffect,useState, React } from "react";
import { useParams } from "react-router-dom";
import Stock from "../../Stock/Stock";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'

const ItemDetailContainer=()=>{
    const [productos,setProductos]=useState([]);
    const [loading,setLoading]=useState(true);
    const {idProducto}=useParams();

    const getItem=(id)=>{
        return new Promise((res,rej)=>{
            setTimeout(()=>{
                const producto=Stock.find(prod=>prod.id==id);
                res(producto);
                setLoading(false);
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
        setLoading(true);
    },[idProducto]);

    return(
        loading ? <p className="loading">cargando detalle de producto...</p>
        :

        <div className="item_detail">
            <ItemDetail producto={productos}/>
        </div>   
    )
}

export default ItemDetailContainer;


