import React from "react";
import './Footer.css';
import logo from '../../images/BrandLogo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSquareInstagram, faSquareFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons';


const Footer=()=>{
    return(
        <div className="container">
            <div className="footer">
                <img className='logo' src={logo} alt='logo naike'/>
                <div className="redes">
                    <h4>REDES</h4>
                    <a href="https://www.instagram.com/tghiglione/" target="_blank"><FontAwesomeIcon className='redesIconos' icon={faSquareInstagram}/></a>
                    <a href="https://www.facebook.com/tomas.ghiglione" target="_blank"><FontAwesomeIcon className='redesIconos' icon={faSquareFacebook} /></a>
                    <a href='https://www.linkedin.com/in/tomasghigione' target="_blank"><FontAwesomeIcon className='redesIconos' icon={faLinkedin} /></a>                    
                </div>
            </div>    
        </div>
    )
};

export default Footer;