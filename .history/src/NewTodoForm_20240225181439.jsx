export function NewToDoForm() {
    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input
                 value={newItem}
                 onChange={e => setNewItem(e.target.value)}
                  
                />
            </div>
        </form>
    )
}