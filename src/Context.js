import React,{Component} from 'react';
import {storeproducts, detailproduct} from './data';
import Product from './components/Product';

const productcontext = React.createContext();



class Productprovider extends Component{
    state = {
        products : [],
        detailproduct : detailproduct,
        cart : [],
        modalopen: false,
        modalproduct : detailproduct,
        carttotal : 0,
        cartsubtotal : 0,
        carttax : 0
    }

    componentDidMount(){
        this.setproducts();
    }

    setproducts = () => {
        let tempproducts = [];
        storeproducts.forEach(item => {
            const singleitem = {...item};
            tempproducts = [...tempproducts,singleitem];
        });
        this.setState({products: tempproducts})
    }

    getitem = (id) => {
        const product = this.state.products.find(item => item.id===id);
        return product;
    }

    handledetail = (id) => {
        const product = this.getitem(id);
        this.setState({detailproduct: product})
    }

    addtocart = (id) => {
        let tempproducts = [...this.state.products];
        const index = tempproducts.indexOf(this.getitem(id));
        const product = tempproducts[index];
        product.incart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(
            () => {
                return {products: tempproducts,
        cart : [...this.state.cart,product]
        };
    }, ()=> {
            this.addtotals();
        }
        );
        console.log(this.state.carttotal)
    }

    openmodal = (id) => {
        const product = this.getitem(id);
        this.setState({modalproduct: product,modalopen:true})
    }

    closemodal = () => {
        this.setState({modalopen: false})
    }

    increment = (id) => {
        let tempcart = [...this.state.cart];
        const tempid = tempcart.find(item => item.id===id);
        const index = tempcart.indexOf(tempid);
        const product = tempcart[index];
        product.count=product.count+1;
        const count=product.count;
        const price=product.price;
        product.total=price*count;
        this.setState({cart:tempcart},()=> this.addtotals())
    }
    
    decrement = (id) => {
        let tempcart = [...this.state.cart];
        const tempid = tempcart.find(item => item.id===id);
        const index = tempcart.indexOf(tempid);
        const product = tempcart[index];
        product.count = product.count-1;
        if(product.count===0){
            this.removeitem(id)
        }else{
            product.total = product.count * product.price; 
            this.setState({cart:tempcart},()=> this.addtotals())
        }
    }
    
    removeitem = (id) => {
        let tempproducts = [...this.state.products];
        let tempcart = [...this.state.cart];

        tempcart = tempcart.filter(item => item.id !== id);
        const index = tempproducts.indexOf(this.getitem(id));
        let removeproduct = tempproducts[index];
        removeproduct.incart = false;
        removeproduct.count = 0;
        removeproduct.total = 0;

        this.setState({cart:[...tempcart],products:[...tempproducts]},() => this.addtotals())
    }

    addtotals = () => {
        let subtotal = 0;
        this.state.cart.map(item => (subtotal += item.total));
        const temptax = subtotal * 0.1;
        const tax = parseFloat(temptax.toFixed(2));
        const total = subtotal+tax;

        this.setState({
             
                cartsubtotal: subtotal,
                carttax:tax,
                carttotal:total
        
    });
        console.log('total')
        console.log(total)
    }
    
    clearcart = () => {
        let tempproducts = [...this.state.cart];
        tempproducts.map(item => [item.incart=false, item.count=0] );
        this.setState({cart: []})
    }

    render(){
        return(
            <productcontext.Provider 
            value={{...this.state,
            handledetail: this.handledetail,
            addtocart: this.addtocart,
            openmodal: this.openmodal,
            closemodal: this.closemodal,
            increment: this.increment,
            decrement: this.decrement,
            removeitem: this.removeitem,
            clearcart: this.clearcart
            }}>
                {this.props.children}
            </productcontext.Provider>
        )
    }
}

const Productconsumer = productcontext.Consumer;

export {Productprovider, Productconsumer};