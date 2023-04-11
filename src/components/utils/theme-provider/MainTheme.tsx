import * as React from 'react';
import { useState, useMemo, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, PaletteMode } from '@mui/material';
import { amber, deepOrange, grey } from '@mui/material/colors';

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

export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

interface MainThemeProps extends React.PropsWithChildren<{}> { }

function MainTheme(props: MainThemeProps) {
    const [mode, setMode] = useState<PaletteMode>('light');
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const colorMode = useMemo(
        () => ({
            // The dark mode switch would invoke this method
            toggleColorMode: () => {
                setMode((prevMode: PaletteMode) =>
                    prevMode === 'light' ? 'dark' : 'light',
                );
            },
        }),
        [],
    );

    useEffect(() => {
        // Set the mode based on the user's system preferences
        setMode(prefersDarkMode ? 'dark' : 'light');

        // Listen for changes to the user's system preferences and update the mode accordingly
        const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
        const listener = (event: MediaQueryListEvent) => {
            setMode(event.matches ? 'dark' : 'light');
        };
        mediaQueryList.addEventListener;
        return () => {
            mediaQueryList.removeEventListener;
        };
    }, [prefersDarkMode]);

    // Update the theme only if the mode changes
    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {props.children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default MainTheme;
