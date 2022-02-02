import "./Todo.css";

export default function Todo(props) {
  if (props.active) {
    return (
      <div className="Todo popup">
        <p>TO DO LIST</p>
      </div>
    );
  } else return null;
}
