//componente padre
import Link from "../common/Link";
import styledComponents from "styled-components";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useNavigate();
  function handleClick() {
    location("/Pokedex");
    console.log("entrando");
  }
  return (
    <div className="navbar">
      <div>
        <Link isActive={true} text="Museum" />
        <Link isActive={false} text="Exhibition" />
        <Link isActive={false} text="Collections" />
        <Link isActive={false} text="Tickets" />
        <Link isActive={false} text="Contacts" />
      </div>
      <div>
        <button className="pokeButton" as={Link} onClick={() => handleClick()}>
          Ir a la pokedex
        </button>
      </div>
    </div>
  );
};
export default Navbar;
