import { useState } from "react"; // Importing useState hook from React

// Component for rendering a form to add new todos
export function NewTodoForm({ onSubmit }) {
    // State hook to manage the value of the new todo input
    const [newItem, setNewItem] = useState("");

    // Function to handle form submission
    function handleSubmit(e) {
        e.preventDefault(); // Preventing default form submission behavior
        if (newItem === "") return; // Returning if the new todo is empty
      
        onSubmit(newItem); // Calling the onSubmit function with the new todo

        setNewItem(""); // Clearing the input field after submission
    }

    // Rendering the form
    return (
        <form onSubmit={handleSubmit} className="new-item-form"> {/* Form for adding new todos */}
            <div className="form-row"> {/* Form row */}
                <label htmlFor="item">New Item</label> {/* Label for the new item input */}
                <input
                    value={newItem} // Value of the input field
                    onChange={e => setNewItem(e.target.value)} // Handling change event to update the value of newItem
                    type="text" // Input type
                    id="item" // Input ID
                />
            </div>
            <button className="btn">Add</button> {/* Button to add the new todo */}
        </form>
    );
}
