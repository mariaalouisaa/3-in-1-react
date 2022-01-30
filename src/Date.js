export default function Date(props) {
  if (props.active) {
    return (
      <div className="Date">
        <p>HI FROM DATE</p>
      </div>
    );
  } else return null;
}
