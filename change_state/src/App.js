import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			count: 0
		};
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
	}
	increment() {
		this.setState(prevState => {
			return { count: prevState.count + 1 };
		});
  }
  
  decrement() {
		this.setState(prevState => {
			return { count: prevState.count - 1 };
		});
  }
  
	render() {
		return (
			<div>
				<h1>{this.state.count}</h1>
				<button onClick={this.increment}>Increment!</button>
        <br/>
        <button onClick={this.decrement}>Decrement!</button>
			</div>
		);
	}
}

export default App;
