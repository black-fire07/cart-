import React,{Component} from 'react';
import Cartitem from './Cartitem';
import './Shoppingcart.css'

class Shoppingcart extends Component {

    state ={
        cartitems : ["milk","bread","kurkure"]
    }

    delhandler = (itemm) => {
        const cartitems = this.state.cartitems;
        console.log( cartitems)
        const index = cartitems.indexOf(itemm);
        console.log(index)
        cartitems.splice(index,1);
        const cartite = cartitems;
        console.log(cartite)
        this.setState({cartitems: cartite});
     }
   render (){

    const ch = this.state.cartitems.map(item => {
    return <Cartitem key={item} item={item} del={() => this.delhandler(item)}/>})
    
    return(
        <div className='shop'>
            <p>you have {this.state.cartitems.length} items in cart</p>
            <form>
                <input type='text'></input>
                <button>Add item</button>
            </form>
            <div className='Cartitems'>
                  
                    {ch}
                  
            </div>
        </div>
    )
}
}

export default Shoppingcart;