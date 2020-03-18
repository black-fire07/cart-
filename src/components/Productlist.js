import React,{Component} from 'react';
import Product from './Product';
import Title from './Title';
import {Productconsumer} from '../Context';

export default class productlist extends Component{
    render(){
        return(
            <React.Fragment>
                <div className='py-5'>
                    <div className='container'>
                        <Title name='our' title='product'/>
                        <div className='row'>
                            <Productconsumer>
                                {value => {
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product}/>;
                                    })
                                }}
                            </Productconsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}