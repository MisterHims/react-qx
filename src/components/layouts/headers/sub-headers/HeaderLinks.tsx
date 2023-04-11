import { NavLink } from "react-router-dom";

const HeaderLinks = () => {
  return (
    <nav className="header-links">
      <ul>
        <li>
          <NavLink to="/docs">Documentation</NavLink>
        </li>
        <li>
          <NavLink to="/exercices">Terrain d'exercices</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderLinks