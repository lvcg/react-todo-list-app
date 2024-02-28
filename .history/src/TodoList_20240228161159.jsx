import { TodoItem } from "./TodoItem"; // Importing TodoItem component

// Component for rendering a list of Todo items
export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list"> {/* Unordered list */}
      {todos.length === 0 && "No Todos"} {/* Display message if no todos */}
      {/* Mapping through each todo to render TodoItem component */}
      {todos.map(todo => {
        return (
          <TodoItem
            {...todo} // Passing todo properties as props to TodoItem
            key={todo.id} // Setting unique key for each todo
            toggleTodo={toggleTodo} // Passing toggleTodo function as prop to TodoItem
            deleteTodo={deleteTodo} // Passing deleteTodo function as prop to TodoItem
          />
        );
      })}
    </ul>
  );
}
