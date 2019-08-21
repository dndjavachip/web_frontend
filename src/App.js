import React, { Component } from 'react';
import './App.css';
import Login from'./LoginandSignup/Login';
import Singup from'./LoginandSignup/Singup';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'login'
    }
  }

  getContent(){
    if(this.state.mode === 'login'){
      
      return(<Login  onChangePage = {function(){
        this.setState({
          mode : "signup"
        })
      }.bind(this)} ></Login>);
    } else if(this.state.mode === "signup"){
      return(<Singup></Singup>);
    }

  }
 
    render(){

      return (
        <div className = "App">
        <div>
        {this.getContent()}
        </div>
        </div>
      );  
    }
}

export default App;
