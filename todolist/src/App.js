import React from "react";

import TodoItem from "./TodoItem";
import todosData from "./data/todosData";

import "./style.css"

function App() {
	const todoItems = todosData.map(item => (
		<TodoItem key={item.id} todo={item} />
	));

	return <div className="todo-list">{todoItems}</div>;
}

export default App;
