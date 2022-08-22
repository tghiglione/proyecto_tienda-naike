import './ItemListContainer.css';

function ItemListContainer(props){
    return(
        <>
            <h1 className="titulo">BIENVENIDOS A {props.titulo}</h1>
        </>
    )
};

export default ItemListContainer;