import { TodoItem } from "./TodoItem"

export function TodoList( { todos, toggleTodo, deleteTodo }) {
    return (
    <ul className="list">
    {todos.length === 0 && "No Todos"}
    {todos.map(todo => {
      return <li >
      <label>
        <input type="checkbox"
         checked={todo.completed}
         //onChange={e => toggleTodo(todo.id, e.target.checked)}
           />
        {todo.title}
      </label>
      <buttton 
      //onClick={() => deleteTodo(todo.id)}
      className="btn btn-danger">Delete</buttton>
    </li>
    })}
  </ul>
    )
}