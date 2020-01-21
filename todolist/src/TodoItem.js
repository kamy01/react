import React from "react";
function handleOnChange() {
	console.log('something changed');
}
function TodoItem(props) {
	return (
		<div className="todo-item">
			<input type="checkbox" checked = {props.item.completed} onChange = {handleOnChange}/>
			<p>{props.item.text}</p>
		</div>
	);
}

export default TodoItem;
