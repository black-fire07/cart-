import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import logo from '../../src/logo512.png';
import './Navbar.css';

class navbar extends Component{
    
    render(){
        return(
            <nav className='navbar navbar-expand-sm navbar-dark px-sm-5'>
                <Link to='/'>
                    <img src={logo} className='navbar-brand' height='60' width='50'/>
                </Link>
                <ul className='navbar-nav align-items-center'>
                    <li className='nav-item ml-5 pl-5'>
                        <Link to='/' className='nav-link'>
                            products
                        </Link>
                    </li>
                </ul>
                <Link to='/cart' className='ml-auto'>
                    <button className='button'>
                        <span className='mr-2'>
                    <FontAwesomeIcon icon={faCartPlus} />
                    </span>
                        my cart
                    </button>
                </Link>
            </nav>
        )
    }
}

export default navbar;