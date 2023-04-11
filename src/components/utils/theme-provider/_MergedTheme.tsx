import { deepmerge } from '@mui/utils';
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  ThemeVars,
  experimental_extendTheme as extendMuiTheme,
} from '@mui/material/styles';
import { extendTheme as extendJoyTheme } from '@mui/joy/styles';
import { blue, grey } from '@mui/material/colors';

const { unstable_sxConfig: muiSxConfig, ...muiTheme } = extendMuiTheme();

const { unstable_sxConfig: joySxConfig, ...joyTheme } = extendJoyTheme({
  // This is required to point to `var(--mui-*)` because we are using
  // `CssVarsProvider` from Material UI.
  cssVarPrefix: 'mui',
  colorSchemes: {
    light: {
      palette: {
        primary: {
          ...blue,
          solidColor: 'var(--mui-palette-primary-contrastText)',
          solidBg: 'var(--mui-palette-primary-main)',
          solidHoverBg: 'var(--mui-palette-primary-dark)',
          plainColor: 'var(--mui-palette-primary-main)',
          plainHoverBg:
            'rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))',
          plainActiveBg: 'rgba(var(--mui-palette-primary-mainChannel) / 0.3)',
          outlinedBorder: 'rgba(var(--mui-palette-primary-mainChannel) / 0.5)',
          outlinedColor: 'var(--mui-palette-primary-main)',
          outlinedHoverBg:
            'rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))',
          outlinedHoverBorder: 'var(--mui-palette-primary-main)',
          outlinedActiveBg: 'rgba(var(--mui-palette-primary-mainChannel) / 0.3)',
        },
        neutral: {
          ...grey,
        },
        // Do the same for the `danger`, `info`, `success`, and `warning` palettes,
        divider: 'var(--mui-palette-divider)',
        text: {
          tertiary: 'rgba(0 0 0 / 0.56)',
        },
      },
    },
    // Do the same for dark mode
    // dark: { ... }
  },
  fontFamily: {
    display: '"Roboto","Helvetica","Arial",sans-serif',
    body: '"Roboto","Helvetica","Arial",sans-serif',
  },
  shadow: {
    xs: `var(--mui-shadowRing), ${muiTheme.shadows[1]}`,
    sm: `var(--mui-shadowRing), ${muiTheme.shadows[2]}`,
    md: `var(--mui-shadowRing), ${muiTheme.shadows[4]}`,
    lg: `var(--mui-shadowRing), ${muiTheme.shadows[8]}`,
    xl: `var(--mui-shadowRing), ${muiTheme.shadows[12]}`,
  },
});

export const mergedTheme = ({
  ...joyTheme,
  ...muiTheme,
  colorSchemes: deepmerge(joyTheme.colorSchemes, muiTheme.colorSchemes),
  typography: {
    ...joyTheme.typography,
    ...muiTheme.typography
  },
  zIndex: {
    ...joyTheme.zIndex,
    ...muiTheme.zIndex
  }
} as unknown) as ReturnType<typeof extendMuiTheme>;

mergedTheme.generateCssVars = (colorScheme) => ({
  css: {
    ...joyTheme.generateCssVars(colorScheme).css,
    ...muiTheme.generateCssVars(colorScheme).css
  },
  vars: (deepmerge(
    joyTheme.generateCssVars(colorScheme).vars,
    muiTheme.generateCssVars(colorScheme).vars
  ) as unknown) as ThemeVars
});

mergedTheme.unstable_sxConfig = {
  ...joySxConfig,
  ...muiSxConfig
};