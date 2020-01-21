import React from 'react';
import logo from './logo.svg';
import './App.css';


function handleClick() {
  console.log("I was clicked")
}

function App() {
  return (
      <div>
          <img src="https://www.fillmurray.com/200/100"/>
          <br />
          <br />
          <button onClick={handleClick} onMouseOver={handleClick} >Click me</button>
      </div>
  )
}

export default App
