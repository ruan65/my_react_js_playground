import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Person(props) {
    return(
        <div className='person'>
            <h1>{props.name}</h1>
            <p>Age: {props.age}</p>
        </div>
    )
}

var root = (
    <div>
        <Person name='Andrew' age='51' />
        <Person name='Sophi' age='9' />
        <Person name='Matilda' age='52' />
    </div>
)

class App extends Component {
  render() {
    return (root);
  }
}

export default App;
