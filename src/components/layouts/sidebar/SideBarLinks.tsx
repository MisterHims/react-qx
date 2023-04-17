import { List, ListItem, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const SideBarDocsLinks = () => {
  return (
    <List className="sidebar-links">
      <ListItem>
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
            <NavLink to="/docs/myreact/personnalisation">
              Personnalisation
            </NavLink>
          </ListItem>
        </List>
        <Typography variant="h5">Branding</Typography>
        <List>
          <ListItem>
            <NavLink to="/docs/branding/colors">Colors</NavLink>
          </ListItem>
        </List>
        <Typography variant="h5">PostCSS</Typography>
        <List>
          <ListItem>
            <NavLink to="/docs/postcss/presentation">Présentation</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/docs/postcss/utilities">PostCSS Utilities</NavLink>
          </ListItem>
        </List>
        <Typography variant="h5">Material UI</Typography>
        <List>
          <ListItem>
            <NavLink to="/docs/material-ui/presentation">Présentation</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/docs/material-ui/typographie">Typographie</NavLink>
          </ListItem>
        </List>
      </ListItem>
    </List>
  );
};

const SideBarExercicesLinks = () => {
  return (
    <List className="sidebar-links">
      <ListItem>
        <Typography variant="h5">TypeScript</Typography>
        <List>
          <ListItem>
            <NavLink to="/exercices/typescript/exercice-01">
              Exercice n°1
            </NavLink>
          </ListItem>
        </List>
        <Typography variant="h5">PostCSS</Typography>
        <List>
          <ListItem>
            <NavLink to="/docs/branding/colors">Colors</NavLink>
          </ListItem>
        </List>
        <Typography variant="h5">Material-UI</Typography>
        <List>
          <ListItem>
            <NavLink to="/exercices/material-ui/exercice-01">
              Exercice n°1
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/exercices/material-ui/exercice-02">
              Exercice n°2 - React Menu
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/exercices/material-ui/exercice-03">
              Exercice n°3 - Custom CSS
            </NavLink>
          </ListItem>
        </List>
        <Typography variant="h5">HTML DOM</Typography>
        <List>
          <ListItem>
            <NavLink to="/exercices/html-dom/base-stylization">Base Stylization</NavLink>
          </ListItem>
        </List>
      </ListItem>
    </List>
  );
};

export { SideBarDocsLinks, SideBarExercicesLinks };
