import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Cartitem.css';
import PropTypes from 'prop-types';

function Cartitem(props) {
        return(
            <div className='Cartitem'>
                <p>{props.item}</p>
                <div  className="logo">
                <FontAwesomeIcon icon={faEdit} />
                <FontAwesomeIcon icon={faTrash} onClick={props.del}/>
                </div>
            </div>
        )
    }

Cartitem.propTypes = {
     item: PropTypes.string.isRequired
}


export default Cartitem;