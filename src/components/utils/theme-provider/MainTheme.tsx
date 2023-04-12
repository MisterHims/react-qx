import * as React from 'react';
import { useState, useMemo, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, PaletteMode } from '@mui/material';
import { amber, grey } from '@mui/material/colors';

import { QxBlue, QxSlate, QxGray, QxNeutral } from './QxPalette';

/* 
Information pratique :
L'utilisation d'une fonction getDesignTokens est préférable car elle
permet de définir dynamiquement les tokens de design en fonction
du mode, plutôt que de dupliquer les définitions pour chaque mode.
Cela rend le code plus facile à maintenir, car nous n'avons pas
besoin de modifier les valeurs à plusieurs endroits si nous
décidons de changer un token de design commun à tous les modes.
De plus, cela facilite l'ajout de nouveaux modes si nous souhaitons
étendre notre application à l'avenir.
*/

// Définition de la fonction getDesignTokens
export const getDesignTokens = (mode: PaletteMode) => ({
palette: {
    mode,
    ...(mode === 'light'
        ? {
            /* Light Mode */
            primary: { main: QxBlue[500] },
            divider: amber[200],
            background: {
                default: QxSlate[50],
                paper: QxSlate[800],
            },
            text: {
                primary: grey[900],
                secondary: grey[800],
            },
        }
        : {
            /* Dark Mode */
            primary: { main: QxBlue[500] },
            secondary: {
                main: QxSlate[50],
            },
            background: {
                default: QxSlate[950],
                paper: QxSlate[800],
            },
            text: {
                primary: QxSlate[500],
                secondary: '#b2bac2',
                hint: 'rgba(0,0,0,0.38)',
            },
        }),
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Arial", sans-serif',
        h1: {fontSize: '6rem'},
        h2: {fontSize: '3.75rem'},
        h3: {fontSize: '3rem'},
        h4: {fontSize: '2.125rem'},
        h5: {fontSize: '1.5rem'},
        h6: {fontSize: '1.25rem'},
        subtitle1: {fontSize: '1rem'},
        subtitle2: {fontSize: '0.875rem'},
        body1: {fontSize: '1rem'},
        body2: {fontSize: '0.875rem'},
        button:{},
        caption:{},
        overline:{}
    },
    // Si nous venons à utiliser MuiAppBar, elle deviendra alors transparente
    props: {
        MuiAppBar: {
            color: 'transparent',
        },
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
                // Change the prefers-color-scheme based on the new mode
                const newMode = mode === 'light' ? 'dark' : 'light';
                setMode(newMode);
                if (typeof window !== 'undefined') {
                    window.localStorage.setItem('color-mode', newMode);
                    document.documentElement.setAttribute('data-theme', newMode);
                    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                        window.localStorage.setItem('prefers-color-scheme', 'dark');
                    } else {
                        window.localStorage.setItem('prefers-color-scheme', 'light');
                    }
                }
            },
        }),
        [mode]
    );

    useEffect(() => {
        if (prefersDarkMode) {
            setMode('dark');
        } else {
            setMode('light');
        }
    }, [prefersDarkMode]);

    useEffect(() => {
        colorMode.toggleColorMode();
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', mode);
    }, [mode]);


    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ColorModeContext.Provider value={colorMode}>
                {props.children}
            </ColorModeContext.Provider>
        </ThemeProvider>
    );
}

export default MainTheme;
