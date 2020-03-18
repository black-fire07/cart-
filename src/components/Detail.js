import React,{Component} from 'react';
import {Productconsumer} from '../Context';
import {Link} from 'react-router-dom';
import './Detail.css';

export default class detail extends Component{
                                    /*mxauto for horizon centering*/
    render(){
        return(
            <Productconsumer>
                {(value) => {
                    const{id,title,img,price,company,info,incart} = value.detailproduct;
                    return(
                        <div className='container py-5'>
                        <div className='row'>
                            <div className='col-8 mx-auto text-center text-slanted text-blue text-capitalize my-5'>
                    <h2>{title}</h2>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-8 mx-auto col-md-6 my-3'>
                                <img src={img} className='img-fluid'/>
                            </div>
                            <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                    <h2>model: {title}</h2>
                    <h4 className='text-title text-muted mt-3 mb-2'>
                    made by: <span className='text-uppercase'>{company}</span>
                    </h4>
                     <h4 className='text-danger'>
                         <strong>
                             price: <span>$</span>{price}
                         </strong>
                     </h4>
                     <p className='font-weight-bold mt-3 mb-0'>
                         some info about product:
                     </p>
                    <p className='text-muted'>{info}</p>
                    <div>
                        <Link to='/'>
                    <button className='btn'>back to products</button>
                        </Link>
                        <Link>
                    <button className='btn-cartt' disabled={incart?true:false} onClick={()=> {
                        value.addtocart(id);
                        value.openmodal(id);
                        }}>{incart ? 'incart':'add to cart'}</button></Link>
                    </div>
                            </div>
                        </div>
                        </div>
                    )
                }}
            </Productconsumer>
        )
    }
}