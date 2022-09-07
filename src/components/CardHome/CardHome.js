import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CardHome.css';

const CardHome=(props)=>{
    return(
        <div className='cardHome'>
            <FontAwesomeIcon className='cardIcon' icon={props.icon}/>
            <h3 className='cardTitle'>{props.title}</h3>
        </div>
    )
    
};

export default CardHome;