export const TextField = (props) => {
 
  return (
    <input
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
};

export default TextField;
