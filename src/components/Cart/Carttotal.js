import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export default function Carttotal({value}){
    const{cartsubtotal,carttotal,carttax,clearcart} = value;
    return(
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right'>
                        <Link to='/'>
                            <Button className='mb-3 px-5' outline color='danger' onClick={()=> clearcart()}> clear cart</Button>
                            
                        </Link>
                        <h5>
                            <span className='text-title'>
    subtotal :<strong>$ {cartsubtotal}</strong>
                            </span>
                        </h5>
                        <h5>
                            <span className='text-title'>
    tax :<strong>$ {carttax}</strong>
                            </span>
                        </h5>
                        <h5>
                            <span className='text-title'>
    total :<strong>$ {carttotal}</strong>
                            </span>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}