import "./styles.css"

export default function App () {
  return <form className="new-item-form">
    <div className="form-row">
      <label htmlfor="item"></label>
      <input type="text" id="item" />
    </div>
  </form>
}
