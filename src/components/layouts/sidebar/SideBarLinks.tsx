import { NavLink } from "react-router-dom"

const SideBarDocsLinks = () => {
  return (
    <ul className="sidebar-links">
      <li>
        <h5>My React App</h5>
        <ul>
          <li>
            <NavLink to="/docs/myreact/presentation">
              Présentation
            </NavLink>
          </li>
          <li>
            <NavLink to="/docs/myreact/installation">
              Installation
            </NavLink>
          </li>
          <li>
            <NavLink to="/docs/myreact/structure">
              Structure
            </NavLink>
          </li>
          <li>
            <NavLink to="/docs/myreact/personnalisation">
              Personnalisation
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <h5>Branding</h5>
        <ul>
          <li>
            <NavLink to="/docs/branding/colors">
              Colors
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <h5>TypeScript</h5>
        <ul>
          <li>
            <NavLink to="/docs/typescript/presentation">
              Présentation
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <h5>PostCSS</h5>
        <ul>
          <li>
            <NavLink to="/docs/postcss/presentation">
              Présentation
            </NavLink>
          </li>
          <li>
            <NavLink to="/docs/postcss/utilities">
              PostCSS Utilities
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <h5>Material-UI</h5>
        <ul>
          <li>
            <NavLink to="/docs/material-ui/presentation">
              Présentation
            </NavLink>
          </li>
          <li>
            <NavLink to="/docs/material-ui/typographie">
              Typographie
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <h5>TailwindCSS</h5>
        <ul>
          <li>
            <NavLink to="/docs/tailwindcss/presentation">
              Présentation
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <h5>Flowbite</h5>
        <ul>
          <li>
            <NavLink to="/docs/flowbite/presentation">
              Présentation
            </NavLink>
          </li>
        </ul>
      </li>
    </ul>
  );
}

const SideBarExercicesLinks = () => {
  return (
    <ul className="sidebar-links">
      <li>
        <h5>TypeScript</h5>
        <ul>
          <li>
            <NavLink to="/exercices/typescript/exercice-01">
              Exercice n°1
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <h5>PostCSS</h5>
        <ul>
          <li>
            <NavLink to="/exercices/postcss/exercice-01">
              Exercice n°1
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <h5>Material-UI</h5>
        <ul>
          <li>
            <NavLink to="/exercices/material-ui/exercice-01"> Exercice n°1 </NavLink>
            <NavLink to="/exercices/material-ui/exercice-02"> Exercice n°2 - React Menu </NavLink>
            <NavLink to="/exercices/material-ui/exercice-03"> Exercice n°3 - Custom CSS </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <h5>TailwindCSS</h5>
        <ul>
          <li>
            <NavLink to="/exercices/tailwindcss/exercice-01">
              Exercice n°1
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <h5>Flowbite</h5>
        <ul>
          <li>
            <NavLink to="/exercices/flowbite/exercice-01">
              Exercice n°1
            </NavLink>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export { SideBarDocsLinks, SideBarExercicesLinks };