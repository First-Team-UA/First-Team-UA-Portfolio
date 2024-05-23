import { NavLink } from "react-router-dom";
import "./Header.css"
const Header = () => {
  return (
    <header className="Header">
      <NavLink to="/" className="Logo NavLink">Logo</NavLink>
<nav>
   <NavLink to="/" className="NavLink NavLink-home">Home</NavLink>
         <NavLink to="/portfolio" className="NavLink NavLink-portfolio">Portfolio</NavLink>
          </nav>
       
    </header>
  );
};

export default Header;
