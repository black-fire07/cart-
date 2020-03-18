import React,{Component} from 'react';
import Title from '../Title';
import Cartcolumns from './Cartcolumn';
import { Productconsumer } from '../../Context';
import Cartlist from './Cartlist';
import Carttotal from './Carttotal';


export default class product extends Component{
    render(){
        return(
            <section>
                <Productconsumer>
                    {value =>{
                       const{cart} = value;

                       if(cart.length>0){
                           return(
                               <React.Fragment>
                            <Title name='your' title='cart' />
                            <Cartcolumns></Cartcolumns>
                            <Cartlist value={value}/>
                            <Carttotal value={value}/>
                            </React.Fragment>
                           )
                       }else{
                           return(
                               <div>
                                   <h1 className='text-center mt-5'>cart is empty</h1>
                               </div>
                           )
                       }
                    }}
                
                </Productconsumer>
            </section>
        )
    }
}