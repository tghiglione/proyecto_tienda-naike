import React from 'react';
import CardHome from '../CardHome/CardHome';
import {faTag, faStar, faTruckFast} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import './Home.css';


const Home=()=>{
    return(
        <div className='container'>
            <h1 className='homeTitle'>
                SOMOS NAIKE
            </h1>
            <div className='cards'>
                <CardHome title="GRANDES OFERTAS" icon={faTag}/>
                <CardHome title="ULTIMOS MODELOS" icon={faStar}/>
                <CardHome title='ENVIOS A TODO EL PAIS' icon={faTruckFast}/>
            </div>
            <div className='ubicacion'>
                <h2>¿DONDE ESTAMOS?</h2>
                <p>Veni a visitarnos!! Nos encontramos en 9 de Julio, Burzaco, Almirante Brown. Buenos Aires. </p>
                <div dangerouslySetInnerHTML={{ __html: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.359337266475!2d-58.39636368418471!3d-34.822056776591545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd4a02ed1feb5%3A0x8dcdcb1e60dfd6eb!2s9%20de%20Julio%20600-698%2C%20B1852AVC%20Burzaco%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1662588176211!5m2!1ses-419!2sar' />"}} />
            </div>
            <div className='link-tienda'>
                <Link to="/tienda">
                    <button className='btn-tienda'>IR A LA TIENDA</button>
                </Link>
            </div>   
        </div>
    )
};

export default Home;
