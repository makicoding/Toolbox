import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    count: window.count,      // We are using window as the communication bus for getting 
                              // plain vanilla JavaScript stuff that is on index.html to
                              // communicate with the React counter here   
  }; 

  componentDidMount() {
    this.setState({
      count: window.count
    });
    window.addCountListener(this.updateCount);
  }

  updateCount = count => {
    this.setState({
      count: count
    });
  }

  render() {
    return (
      <div className="App">
        <nav style={{
          height: '80px',
          width: '100%',
          background: '#333',
          color: '#fff',
        }}>
          {this.state.count}
        </nav>
      </div>
    );
  }
}

export default App;
