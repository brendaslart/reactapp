//componente hijo
const Link = (props) => {
  // propiedad style={{color:condicion ? amarillo: negro}}
  // extraer texto (props.text) y bandera de is active isActive(props.isactive)para cambiar el color
  console.log(props);
  //
  //se obtiene el texto de links con props.text la propiedad text de props

  //las clases de css se agregan con className
  //la nomenclatura para agregar codigo javascript dentro de un string es  `${}`
  return (
    <a
      href="#0"
      className={`navBar-link ${
        props.isActive === true ? "active-link" : "default-link"
      }`}
    >
      {props.text}
    </a>
  );
};
export default Link;
