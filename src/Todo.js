import "./Todo.css";

export default function Todo(props) {
  if (props.active) {
    function handleSubmit(e) {
      e.preventDefault();
      let text = e.target.input.value;
    }

    return (
      <div className="Todo popup">
        <p>TO DO LIST</p>
        <form onSubmit={handleSubmit}>
          <label>What's on the agenda?</label>
          <br />
          <input type="text" name="input" autoComplete="off" />
          <input type="submit" value="+" />
        </form>
      </div>
    );
  } else return null;
}
