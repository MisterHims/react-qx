import { amber, deepOrange, grey } from '@mui/material/colors';
import { PaletteMode, createTheme } from '@mui/material';

// Import de l'interface de thème étendue (ts) afin d'utiliser les propriétés status et neutral.
import './custom.js';

// Définition de la fonction getDesignTokens
export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          /* Light Mode */
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          /* Dark Mode */
          background: {
            default: deepOrange[900],
            paper: deepOrange[900],
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
  },
});

export const theme = createTheme({
  palette: {
    mode: 'light',
  },
  status: {
    danger: 'red',
  },
});
