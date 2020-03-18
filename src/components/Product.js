import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Productconsumer} from '../Context';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

export default class Product extends Component{
    render(){
        const {id , title, img , price, incart} = this.props.product;
        return(
            <div className='col-9 mx-auto col-md-6 col-lg-4 my-5'>
                 <div className='card'>
                     <Productconsumer>
                         {(value) => (<div className='img-container p-5'onClick={()=> value.handledetail(id)}>
                         <Link to='/detail'>
                             <img src={img} alt="product" className='card-img-top'/>
                         </Link>
                         <button className='cart-btn' disabled={incart ? true : false} 
                         onClick={() => {
                             value.addtocart(id);
                             value.openmodal(id);
                         }}>
                             {incart ? (
                                 <p className='text-capitalize mb-0' disabled>
                                     {' '}
                                     incart</p>) : (<FontAwesomeIcon icon={faCartPlus} />)                                 
                             }
                         </button>
                     </div>
                     )}
                     </Productconsumer>
                     <div className='card-footer d-flex justify-content-between'>
                         <p className='align-self-center mb-0'>
                             {title}
                         </p>
                         <h5 className='text-blue font-italic mb-0'>
                             <span className='mr-1'>$</span>
                             {price}
                         </h5>
                     </div>
                 </div>
            </div>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        incart: PropTypes.bool
    }).isRequired
}