import "./styles.css"
import { useState } from "react"

export default function App () {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setTodos(currentTdos => {
      return [
        ...currentTodos, {
          id: crypto.randomUUID(), title: newItem, completed:false },
      ]
    })
  }

  return (
  <>
  <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlfor="item">New Item </label>
      <input value={newItem}
        onChange={e => setNewItem(e.target.value )}
        type="text"
        id="item"
         />
    </div>
    </form>
    <button className="btn">Add </button>
    <h1 className="header">Todo List</h1>
    <ul className="list">
      {todos.map(todo => {
        return 
      <li>
        <label>
          <input type="checkbox" checked={todo.completes}/>
          Item 2
        </label>
        <buttton className="btn btn-danger">Delete</buttton>
      </li>
      })}
    </ul>
  </>
  )
}
