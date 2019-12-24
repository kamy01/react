import React from "react";
import "./App.css";

// Challenge:
// Given an incomplete class-based component without a constructor,
// add a constructor and initialize state to fix the broken component.

class App extends React.Component {
	constructor() {
    super()
    this.state = {
      name: "Andrei",
      age: 28,
      isLogged: false
    }
  }
  loggStatus ()
  {
    const number = Math.random();
    this.isLogged = number>0.5;
    let status = this.isLogged  ? 'in' : 'out';
    return status;
  }
	render() {
		return (
			<div>
				<h1>{this.state.name}</h1>
				<h3>{this.state.age} years old</h3>
        <h1>You are currently logged  {this.loggStatus()}</h1>
			</div>
		);
	}
}

export default App;
