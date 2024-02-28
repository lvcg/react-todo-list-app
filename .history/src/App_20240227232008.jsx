import { NewToDoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"
import "./styles.css"
import { useState, useEffect } from "react"

export default function App () {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    
  })

   function addToDo(title) {
      setTodos(currentTodos => {
          return [
            ...currentTodos,
            { id: crypto.randomUUID(), title, completed: false },
            ]
        })
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
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
  </>
  )
}
