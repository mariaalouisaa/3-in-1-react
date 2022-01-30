export default function Todo(props) {
  if (props.active) {
    return (
      <div className="Todo">
        <p>HI FROM TODO</p>
      </div>
    );
  } else return null;
}
