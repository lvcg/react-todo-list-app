import { useEffect, useState } from "react"; // Importing necessary modules from React
import { NewTodoForm } from "./NewTodoForm"; // Importing NewTodoForm component
import "./styles.css"; // Importing CSS styles
import { TodoList } from "./TodoList"; // Importing TodoList component

export default function App() {
  // State hook to manage todos
  const [todos, setTodos] = useState(() => {
    // Retrieving todos from local storage, initializing with empty array if no todos found
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  // Effect hook to update local storage when todos change
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  // Function to add a new todo
  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false }, // Generating unique id for the new todo
      ];
    });
  }

  // Function to toggle the completed status of a todo
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }; // Toggling completed status of the matching todo
        }
        return todo;
      });
    });
  }

  // Function to delete a todo
  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id); // Filtering out the todo with the matching id
    });
  }

  // Rendering the application
  return (
    <>
      {/* Component for adding new todos */}
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1> {/* Header for the Todo List */}
      {/* Component to display the list of todos */}
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
