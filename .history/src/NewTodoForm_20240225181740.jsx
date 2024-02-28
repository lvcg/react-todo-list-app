export function NewToDoForm() {
    function handleSubmit(e) {
        e.preventDefault()

        setTodos(currentTodos => {
            return [
                ...currentTodos,
            ]
        })
    }
    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input
                 value={newItem}
                 onChange={e => setNewItem(e.target.value)}
                 type="text"
                 id="item" 
                />
            </div>
        </form>
    )
}