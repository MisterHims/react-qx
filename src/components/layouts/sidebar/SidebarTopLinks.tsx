import { Box, List, ListItem } from "@mui/material";
import { NavLink } from "react-router-dom";

// NOTE 1
// Une fonction a été ajoutée au component ci-dessous
// qui permet d'insérer la classe "active" à un élément en
// fonction de l'URL actuel

// NOTE 2
// Inutile car le composant NavLink le fait tout seul *_*

const SidebarTopLinks = () => {
  return (
    <List className="sidebar-top-links">
      <ListItem>
        <NavLink to="/docs">
          <Box component="span" className="svg-box-container">
            <svg className="book" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.5 7c1.093 0 2.117.27 3 .743V17a6.345 6.345 0 0 0-3-.743c-1.093 0-2.617.27-3.5.743V7.743C5.883 7.27 7.407 7 8.5 7Z"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M15.5 7c1.093 0 2.617.27 3.5.743V17c-.883-.473-2.407-.743-3.5-.743s-2.117.27-3 .743V7.743a6.344 6.344 0 0 1 3-.743Z"></path>
            </svg>
          </Box>
          Documentation
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/exercices">
          <Box component="span" className="svg-box-container">
            <svg className="cube" viewBox="0 0 24 24">
              <path d="m6 9 6-3 6 3v6l-6 3-6-3V9Z" ></path>
              <path d="m6 9 6 3v7l-6-3V9Z"></path>
              <path d="m18 9-6 3v7l6-3V9Z"></path>
            </svg>
          </Box>
          Terrain d'exercices
        </NavLink>
      </ListItem>
    </List>
  );
};

export default SidebarTopLinks;
