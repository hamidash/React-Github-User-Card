import React, { Component } from "react";
import "./App.css";
import Followers from './components/Followers';
import User from './components/User';


class App extends Component {
  render(){
    return (
        <div className='App'>
          <User />
          <Followers />
        </div>
    )
  }
    
      
  
}

export default App;


