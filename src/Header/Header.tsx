import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";
import LanguageSwitcher from "../SwitcherLng/Switcher";
import logo from "./logo.svg";

const Header = () => {
  const location = useLocation();

  return (
    <header className="Header">
      <NavLink to="/" className="Logo">
        <img src={logo} alt="Logo" className="LogoImg" />
      </NavLink>
      <nav>
        <NavLink
          to="/"
          className={`NavLink NavLink-home ${location.pathname === '/' ? 'active' : ''}`}
        >
          Home
        </NavLink>
        <NavLink
          to="/portfolio"
          className={`NavLink NavLink-portfolio ${location.pathname === '/portfolio' ? 'active' : ''}`}
        >
          Portfolio
        </NavLink>
      </nav>
      <LanguageSwitcher />
    </header>
  );
};

export default Header;
