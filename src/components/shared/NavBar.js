//componente padre
import Link from "../common/Link";
import styledComponents from "styled-components";
import styled from "styled-components";

const Navbar = () => {
  return (
  
      <div className="navbar">
        <Link isActive={true} text="Museum" />
        <Link isActive={false} text="Exhibition" />
        <Link isActive={false} text="Collections" />
        <Link isActive={false} text="Tickets" />
        <Link isActive={false} text="Contacts" />
      </div>
  
  );
};
export default Navbar;
