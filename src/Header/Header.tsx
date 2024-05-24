import { NavLink } from "react-router-dom";
import "./Header.css"
import LanguageSwitcher from "../SwitcherLng/Switcher";

const Header = () => {
  return (
    <header className="Header">
      <NavLink to="/" className="Logo NavLink">Logo</NavLink>
<nav>
   <NavLink to="/" className="NavLink NavLink-home">Home</NavLink>
         <NavLink to="/portfolio" className="NavLink NavLink-portfolio">Portfolio</NavLink>
          </nav>
<LanguageSwitcher></LanguageSwitcher>       
    </header>
  );
};

export default Header;
