import React,{Component} from 'react';
import {Browerrouter as Router, Switch} from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
//import Quiz from './components/Quiz';
//import Clunter from './components/Clunter';
//import Shoppingcart from './components/Shoppingcart';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Productlist from './components/Productlist';
import Detail from './components/Detail';
import Cart from './components/Cart/Cart';
import {Route} from 'react-router-dom';
import Modal from './components/Modal';


class App extends Component {
  render(){
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/' component={Productlist}/>
        <Route path='/detail' component={Detail}></Route>
        <Route path='/cart' component={Cart}></Route>
      </Switch>
      <Modal/>
      
      
    
    </React.Fragment>
  );
}
}
export default App;
