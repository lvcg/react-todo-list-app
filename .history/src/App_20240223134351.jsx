import "./styles.css"

export default function App () {
  const [newItem, ]
  return (
  <>
  <form className="new-item-form">
    <div className="form-row">
      <label htmlfor="item">New Item </label>
      <input type="text" id="item" />
    </div>
    </form>
    <button className="btn">Add </button>
    <h1 className="header">Todo List</h1>
    <ul className="list">
      <li>
        <label>
          <input type="checkbox" />
          Item 1
        </label>
        <buttton className="btn btn-danger">Delete</buttton>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          Item 2
        </label>
        <buttton className="btn btn-danger">Delete</buttton>
      </li>
    </ul>
  </>
  )
}
