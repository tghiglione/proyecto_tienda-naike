import { useState } from "react";
import './ItemCount.css';

const ItemCount =(props)=>{
    const [contador,setContador]=useState(props.inicial);
    
    const incrementar=()=>{
        contador<props.stock ? setContador(contador+1) : alert("No hay mas stock disponible");
    };

    const decrementar=()=>{
        contador>0 ? setContador(contador-1) : alert("No se puede menos de cero")
    };

    return(
        <>
            <div className="contador">
                <button onClick={decrementar} className="btn-contador">-</button>
                <h2>{contador}</h2>
                <button onClick={incrementar} className="btn-contador">+</button>    
            </div>
            <div>
                <button onClick={()=>props.onAdd(contador)} className="btn-carrito">Agregar al carrito</button>
            </div>
        </>
       
    )
};

export default ItemCount;