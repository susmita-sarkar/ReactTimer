import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(props){
      super(props);
      this.state={currentTime:new Date().toLocaleTimeString()}
      }
    
    render(){
      return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hi Susmita!!!!</p>
        <p> The time is: {this.state.currentTime}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
      );
    }
  
  changeTime=() =>{
    this.setState({currentTime:new Date().toLocaleTimeString()});
  }
  
  componentDidMount(){
      setInterval(this.changeTime, 1000);
    }
  };
//ReactDOM.render(<App/>,document.getElementById("root"));
export default App;
