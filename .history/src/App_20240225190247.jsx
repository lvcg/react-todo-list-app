import { NewToDoForm } from "./NewTodoForm"
import "./styles.css"
import { useState } from "react"

export default function App () {
  const [todos, setTodos] = useState([])

   function addToDo(title) {
      setTodos(currentTodos => {
          return [
            ...currentTodos,
            { id: crypto.randomUUID(), title, completed: false },
            ]
        })
   }

  function handleSubmit(e) {
    e.preventDefault()

    setTodos(currentTodos => {
      return [
        ...currentTodos, {
          id: crypto.randomUUID(), title: newItem, completed: false },
      ]
    })

    setNewItem("")
  }

  function toggleToDo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
  <>
  <NewToDoForm onSubmit={addTodo} />
    <h1 className="header">Todo List</h1>
    <Todo
  </>
  )
}
