import { NavLink } from "react-router-dom";
import "./Header.css";
import LanguageSwitcher from "../SwitcherLng/Switcher";
import logo from "./logo.svg";

const Header = () => {
  return (
    <header className="Header">
      <NavLink to="/" className="Logo NavLink">
        <img src={logo} alt="Logo" className="LogoImg" />
      </NavLink>
      <nav>
        <NavLink to="/" className="NavLink NavLink-home">
          Home
        </NavLink>
        <NavLink to="/portfolio" className="NavLink NavLink-portfolio">
          Portfolio
        </NavLink>
      </nav>
      <LanguageSwitcher />
    </header>
  );
};

export default Header;
