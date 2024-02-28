// Component for rendering a single Todo item
export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      {/* Checkbox input to toggle completion status */}
      <label>
        <input
          type="checkbox"
          checked={completed} // Setting checked status based on completion state
          onChange={e => toggleTodo(id, e.target.checked)} // Handling change event to toggle completion status
        />
        {title} {/* Displaying the title of the todo */}
      </label>
      {/* Button to delete the todo */}
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}
