import { Experimental_CssVarsProvider as CssVarsProvider, experimental_extendTheme as extendTheme, } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";

import { QxBlue, QxPink, QxSlate, QxGray, QxNeutral, QxRed } from "./colors/QxPalette";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    QxCustom: {
      main: string,
      light: string,
      dark: string,
    };
  }
  interface Palette {
    QxCustom: {
      main: string,
      light: string,
      dark: string,
    };
  }
}

// View the full default theme here: https://mui.com/material-ui/customization/default-theme/
const theme = extendTheme({
  cssVarPrefix: "Qx",
  colorSchemes: {
    // ## LIGHT THEME ## \\
    light: {
      palette: {
        common: {
          white: QxSlate[50],
          black: QxSlate[950],
        },

        primary: {
          main: QxBlue[500],
          light: QxBlue[400],
          dark: QxBlue[600],
          contrastText: QxNeutral[0],
        },

        secondary: {
          main: QxPink[500],
          //light: default-value (#ba68c8);
          //dark: default-value (#7b1fa2);
          contrastText: QxNeutral[0],
        },

        neutral: {
          main: QxSlate[800], // utilisée pour les titres
          light: QxSlate[300],
          dark: QxSlate[800],
          contrastText: QxNeutral[0],
        },

        // Custom token (key-value pairs) : Need to define it to index.css for working
        QxCustom: {
          main: QxSlate[200],
          light: QxSlate[200],
          dark: QxSlate[200],
        },

        error: {
          main: QxRed[600],
          light: QxRed[400],
          dark: QxRed[800],
          contrastText: QxNeutral[0],
        },

        /*
        warning: {
          // main: default-value (#ed6c02),
          // light: default-value (#ff9800),
          // dark: default-value (#e65100),
          // contrastText: default-value (#fff),
        },
        */

        /*
        info: {
          // main: default-value (#0288d1),
          // light: default-value (#03a9f4),
          // dark: default-value (#01579b),
          // contrastText: default-value (#fff),
        },
        */

        /*
        success: {
          // main: default-value (#2e7d32),
          // light: default-value (#4caf50),
          // dark: default-value (#1b5e20),
          // contrastText: default-value (#fff),
        },
        */

        background: {
          default: QxSlate[50],
          paper: QxSlate[800],
        },

        text: {
          primary: QxSlate[700],
          secondary: QxSlate[600],
          // disabled: default-value (rgba(0, 0, 0, 0.38)),
        },

        divider: QxNeutral[200],

        /*
        action: {
          // active: default-value (rgba(0, 0, 0, 0.54)),
          // hover: default-value (rgba(0, 0, 0, 0.04)),
          // hoverOpacity: default-value (0.04),
          // selected: default-value (rgba(0, 0, 0, 0.8)),
          // selectedOpacity: default-value (0.08),
          // disabled: default-value (rgba(0, 0, 0, 0.26));
          // disabledBackground: default-value (rgba(0, 0, 0, 0.12))
          // disabledOpacity: (0.38)
          // focus: (rgba(0, 0, 0, 0.12))
          // focusOpacity: (0.12)
          // activatedOpacity: (0.12)
        },
        */
        /*
       displayPrint: {
        cssProperty: default-value (false)
        transform: default-value (f transform())
       }
       */
      },
    },
    // ## DARK THEME ## \\
    dark: {
      palette: {
        primary: {
          main: QxBlue[600],
          light: QxBlue[500],
          dark: QxBlue[700],
          contrastText: QxNeutral[0],
        },

        secondary: {
          main: QxPink[400],
        },

        neutral: {
          main: QxSlate[300], // utilisée pour les titres
          light: QxSlate[300],
          dark: QxSlate[500],
          contrastText: QxNeutral[0],
        },

        // Custom token (key-value pairs) : Need to define it to index.css for working
        QxCustom: {
          main: QxSlate[200],
          light: QxSlate[200],
          dark: QxSlate[200],
        },

        background: {
          default: QxSlate[900],
          paper: QxSlate[800],
        },

        text: {
          primary: QxSlate[400],
          secondary: QxSlate[500],
        },
      },
    },
  },
  typography: {
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    h1: { fontSize: "3rem", fontWeight: "900" },
    h2: { fontSize: "2.5rem", fontWeight: "800" },
    h3: { fontSize: "2rem", fontWeight: "700" },
    h4: { fontSize: "1.75rem", fontWeight: "600" },
    h5: { fontSize: "1.5rem", fontWeight: "500" },
    h6: { fontSize: "1.25rem", fontWeight: "400" },
    subtitle1: { fontSize: "1rem" },
    subtitle2: { fontSize: "0.875rem" },
    body1: { fontSize: "1rem" },
    body2: { fontSize: "0.875rem" },
    button: {},
    caption: {},
    overline: {},
  },
  components: {
    // Permet de définir une marge utilisée par défaut pour nos <Typography>
    // ainsi qu'une couleur pour chacune de nos variantes
    MuiTypography: {
      styleOverrides: {
        root: () => ({ marginBottom: "0.35rem" }),
        h1: ({ theme }) => ({ color: theme.palette.neutral.main }),
        h2: ({ theme }) => ({ color: theme.palette.neutral.main }),
        h3: ({ theme }) => ({ color: theme.palette.neutral.main }),
        h4: ({ theme }) => ({ color: theme.palette.neutral.main }),
        h5: ({ theme }) => ({ color: theme.palette.neutral.main }),
        h6: ({ theme }) => ({ color: theme.palette.neutral.main }),
        subtitle1: ({ theme }) => ({ color: theme.palette.neutral.main }),
        subtitle2: ({ theme }) => ({ color: theme.palette.neutral.main }),
        body1: ({ theme }) => ({ color: theme.palette.text.primary }),
        body2: ({ theme }) => ({ color: theme.palette.text.primary }),
      },
    },
    // Changement de la couleur utilisée par défaut pour le survol des boutons en mode dark
    // theme.palette.primary.dark remplacée par theme.palette.primary.light
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          marginTop: "1rem",
          "&:hover": {
            backgroundColor:
              theme.palette.mode === "dark"
                ? theme.palette.primary.light
                : theme.palette.primary.dark,
            color: theme.palette.primary.contrastText,
          },
        }),
      },
    },
  },
});

interface MainThemeProps extends React.PropsWithChildren<{}> {}

function MainTheme(props: MainThemeProps) {
  return <CssVarsProvider theme={theme}>{props.children}</CssVarsProvider>;
}

export default MainTheme;
