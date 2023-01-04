export const HelloComponent = () => {
  // Funcion de variable

  return <div style={{ color: "red" }}> hola componente </div>;
};

export const HelloComponent2 = () => {
  // Funcion de variable

  return <div style={{ color: "blue" }}> hola componente </div>;
};

export const HelloComponent3 = () => {
  // Funcion de variable

  return <div style={{ color: "pink" }}> hola componente </div>;
};

export const HelloWithMyText = (props) => {
  // consol con nuestra propiedad
  // props es un objeto que tiene un  conjunto de propiedades que recibe nuestra funcion
  //accedemos a las propiedades con las siguientes nomenclaturas "props.p´ropiedad"
  console.log(props, props.text);
  return <div style={{ color: props.color }}>{props.text}</div>;
};
