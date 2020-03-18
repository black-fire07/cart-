import React from 'react';
import './Cartitem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Cartitem({item,value}){
    const{id,title,img,price,total,count} = item;
    const{decrement,increment,removeitem} = value;
    //d-lg-none......imp property to hide in large show in other format
    return(
        <div className='row my-1 text-capitalize text-center'>
            <div className='col-10 mx-auto col-lg-2'>
                <img src={img} style={{width: "5rem", height: "5rem"}} className='img-fluid' alt='product' />
            </div>
            <div className='col-10 mx-auto col-lg-2 mt-2'>
                <span className='d-lg-none'>product :</span>{title}
            </div>
            <div className='col-10 mx-auto col-lg-2 mt-2'>
    <span className='d-lg-none'>price: </span>$<strong>{price}</strong>        
            </div>
            <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
                <div className='d-flex justify-content-center'>
                    <div><span className='btn btn-black mx-1' onClick={()=>decrement(id)}>-</span>
    <span className='btn btn-black mx-1'>{count}</span>
    <span className='btn btn-black mx-1' onClick={()=> increment(id)}>+</span></div>
                </div>
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                <div className='cart-icon' onClick={()=> removeitem(id)}>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </div>
            </div>
            <div className='col-10 mx-auto col-lg-2'>
    <strong>item total : $ {total}</strong>
            </div>
        </div>
    )
}