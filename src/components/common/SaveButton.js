export const SaveButton = (props) => {
  console.log(props);
  return (
    <button className="primary" onClick={props.onClick}>
      {props.text}{" "}
    </button>
  );
};
export default SaveButton;
