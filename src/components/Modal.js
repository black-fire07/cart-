import React,{Component} from 'react';
import {Productconsumer} from '../Context';
import {Link} from 'react-router-dom';
import './Modal.css';

export default class Modal extends Component {
    render(){
        return(
            <Productconsumer>
                {value => {
                    const{closemodal,modalopen} = value;
                    const{price,img,title}=value.modalproduct;

                    if(!modalopen){
                        return null;
                    }else{
                        return(
                            <div className='modal'>
                                {/*removed row div classnME=ROW*/}
                                    <div id='mod' className='col-9 mx-auto col-md-4 col-lg-3 text-center text-capitalize'>
                                        <h5 className='mt-3' >{title}</h5>
                                        <img src={img} className='img-fluid' alt='product'/>
                                        <h5>item added to cart</h5>
                        <h5 className='text-muted'>price : $ {price}</h5>
                        <div className='mb-5 mt-4 ml-3'>
                                    <Link to='/'>
                                        <button className='btn mr-4' onClick={()=>closemodal()}>store</button>
                                    </Link>
                                    <Link to='/cart'>
                                        <button className='btn-cartt mr-4' onClick={()=> closemodal()}>go to cart</button>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }}
            </Productconsumer>
        )
    }
}