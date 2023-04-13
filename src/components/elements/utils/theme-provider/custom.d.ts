/* Ce script permet d'étendre les interfaces prédéfinies de Material-UI
pour ajouter des propriétés personnalisées afin de permettre une
personnalisation plus poussée des couleurs et des propriétés
du thème de l'application. */

import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        };
    }

    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }

    interface Palette {
        neutral: Palette['primary'];
    }

    interface PaletteOptions {
        neutral?: PaletteOptions['primary'];
    }

    interface PaletteColor {
        darker?: string;
    }

    interface SimplePaletteColorOptions {
        darker?: string;
    }
}
