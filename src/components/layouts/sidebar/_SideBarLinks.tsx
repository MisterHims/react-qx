import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const SideBarDocsLinks = () => {
  return (
    <ul className="sidebar-links">
      <li>
        <Typography variant="h5">My React App</Typography>

        <List>
          <ListItem>
            <NavLink to="/docs/myreact/presentation">Présentation</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/docs/myreact/installation">Installation</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/docs/myreact/structure">Structure</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/docs/myreact/personnalisation">Personnalisation</NavLink>
          </ListItem>
        </List>
      </li>

      <li>
        <Typography variant="h5">Branding</Typography>
        <ul>
          <li>
            <NavLink to="/docs/branding/colors">Colors</NavLink>
          </li>
        </ul>
      </li>
      <li>
        <Typography variant="h5">TypeScript</Typography>
        <ul>
          <li>
            <NavLink to="/docs/typescript/presentation">Présentation</NavLink>
          </li>
        </ul>
      </li>
      <li>
        <Typography variant="h5">PostCSS</Typography>
        <ul>
          <li>
            <NavLink to="/docs/postcss/presentation">Présentation</NavLink>
          </li>
          <li>
            <NavLink to="/docs/postcss/utilities">PostCSS Utilities</NavLink>
          </li>
        </ul>
      </li>
      <li>
        <Typography variant="h5">Material-UI</Typography>
        <ul>
          <li>
            <NavLink to="/docs/material-ui/presentation">Présentation</NavLink>
          </li>
          <li>
            <NavLink to="/docs/material-ui/typographie">Typographie</NavLink>
          </li>
        </ul>
      </li>
      <li>
        <Typography variant="h5">TailwindCSS</Typography>
        <ul>
          <li>
            <NavLink to="/docs/tailwindcss/presentation">Présentation</NavLink>
          </li>
        </ul>
      </li>
      <li>
        <Typography variant="h5">Flowbite</Typography>
        <ul>
          <li>
            <NavLink to="/docs/flowbite/presentation">Présentation</NavLink>
          </li>
        </ul>
      </li>
    </ul>
  );
};

const SideBarExercicesLinks = () => {
  return (
    <ul className="sidebar-links">
      <li>
        <Typography variant="h5">TypeScript</Typography>
        <ul>
          <li>
            <NavLink to="/exercices/typescript/exercice-01"> Exercice n°1 </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <Typography variant="h5">PostCSS</Typography>
        <ul>
          <li>
            <NavLink to="/exercices/postcss/exercice-01">Exercice n°1</NavLink>
          </li>
        </ul>
      </li>
      <li>
        <Typography variant="h5">Material-UI</Typography>
        <ul>
          <li>
            <NavLink to="/exercices/material-ui/exercice-01"> {" "} Exercice n°1{" "} </NavLink>
          </li>
          <li>
            <NavLink to="/exercices/material-ui/exercice-02"> {" "} Exercice n°2 - React Menu{" "} </NavLink>
          </li>
          <li>
            <NavLink to="/exercices/material-ui/exercice-03">
              {" "}
              Exercice n°3 - Custom CSS{" "}
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <Typography variant="h5">TailwindCSS</Typography>
        <ul>
          <li>
            <NavLink to="/exercices/tailwindcss/exercice-01">
              Exercice n°1
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <Typography variant="h5">Flowbite</Typography>
        <ul>
          <li>
            <NavLink to="/exercices/flowbite/exercice-01">Exercice n°1</NavLink>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export { SideBarDocsLinks, SideBarExercicesLinks };
