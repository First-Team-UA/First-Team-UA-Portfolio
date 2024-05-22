import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Мій сайт</h1>
      <nav>
        <ul>
          <li><NavLink to="/">Домашня</NavLink></li>
          <li><NavLink to="/portfolio">Портфоліо</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
