import {
  Experimental_CssVarsProvider as CssVarsProvider,
  ThemeProvider,
  experimental_extendTheme as extendTheme,
} from "@mui/material/styles";
import { QxBlue, QxPink, QxSlate, QxGray, QxNeutral } from "./colors/QxPalette";

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
          light: QxBlue[300],
          dark: QxBlue[700],
          contrastText: QxNeutral[0],
        },

        secondary: {
          main: QxPink[500],
          //light: default-value (#ba68c8);
          //dark: default-value (#7b1fa2);
          contrastText: QxNeutral[0],
        },

        // Custom token (key-value pairs) : Need to define it to index.css for working
        neutral: {
          main: QxSlate[800],
          light: QxSlate[300],
          dark: QxSlate[950],
          contrastText: QxNeutral[0],
        },

        /*
        error: {
          // main: default-value (#d32f2f),
          // light: default-value (#ef5350),
          // dark: default-value (#c62828),
          // contrastText: default-value (#fff),
        },
        */

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
          light: QxBlue[300],
          dark: QxBlue[500],
          contrastText: QxNeutral[0],
        },
        secondary: {
          main: QxPink[400],
        },
        neutral: {
          main: QxSlate[200],
          contrastText: QxNeutral[0],
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
    h1: { fontSize: "6rem" },
    h2: { fontSize: "3.75rem" },
    h3: { fontSize: "3rem" },
    h4: { fontSize: "2.125rem" },
    h5: { fontSize: "1.5rem" },
    h6: { fontSize: "1.25rem" },
    subtitle1: { fontSize: "1rem" },
    subtitle2: { fontSize: "0.875rem" },
    body1: { fontSize: "1rem" },
    body2: { fontSize: "0.875rem" },
    button: {},
    caption: {},
    overline: {},
  },
  components: {
    // Si nous venons à utiliser MuiAppBar, elle deviendra alors transparente
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: "transparent",
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
