import React from 'react'
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor() {
    super()
    this.clicker = this.clicker.bind(this)
  }

  clicker() {
    console.log(this.context)
  }

  render(){
    

    return (
      <div className="App">
        <button onClick={this.clicker}>Click 1</button>
        <button >Click 2</button>
        <button >Click3</button>
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
