import React from "react"

import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import TodoItem from "./TodoItem"


function App() {
  return (
    <div className="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        </div>
  )
}

export default App
