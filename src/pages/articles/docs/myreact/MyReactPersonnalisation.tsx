import { MetaData } from "../../../../components/elements/utils/seo/MetaData";
import { Box, Typography } from "@mui/material";

const MyReactPersonnalisation = () => {
  MetaData("Personnalisation - myReact", "Demo meta description");
  return (
    <Box component="main" className="content">
      <Typography variant="h2">Personnalisation des styles</Typography>
      <Typography variant="body1">
        Il existe de nombreuses façons de personnaliser une application React
        avec MUI et les feuilles de styles PostCSS :
      </Typography>
      <ul>
        <li>
          <p>
            Utiliser le thème de MUI : Le thème de MUI permet de définir les
            couleurs, les polices et les styles globaux de l'application. Il est
            possible de personnaliser le thème en utilisant la propriété
            createTheme de MUI. Nous pouvons ainsi définir nos couleurs
            primaires et secondaires, les typographies et les styles de notre
            application. Il est possible de passer des props à nos components
            MUI pour surcharger certains styles.
          </p>
        </li>
        <li>
          <p>
            Utiliser les propriétés sx et css de MUI : Les propriétés sx et css
            de MUI permettent d'appliquer des styles directement à un component.
            La propriété sx est une propriété spécifique à MUI qui permet
            d'écrire des styles sous forme d'objet JavaScript. La propriété css
            permet quant à elle d'écrire des styles CSS. Il est possible de
            combiner les deux pour personnaliser les styles d'un component MUI.
          </p>
        </li>
        <li>
          <p>
            Utiliser les feuilles de styles PostCSS : Les feuilles de styles
            PostCSS permettent de définir des variables et des styles globaux
            pour l'application de manière centralisée. Nous pouvons ensuite
            utiliser ces variables et styles dans tous les components de notre
            application à travers les classes. Cela peut vous permettre de
            personnaliser les styles de nos components de manière plus
            granulaire.
          </p>
        </li>
        <li>
          <p>
            Utiliser des composants personnalisés : Il est possible de créer des
            composants personnalisés en utilisant les composants de base fournis
            par MUI ou en créant des composants à partir de zéro. Nous pouvons
            ainsi créer des composants qui correspondent exactement à nos
            besoins en termes de styles et de fonctionnalités.
          </p>
        </li>
      </ul>
      <Typography variant="body1">
        Parmi ces quatre différentes façons, nous avons fait le choix d'utiliser
        une alternative hybride, c'est à dire utiliser le theme de MUI pour les
        Unstyled Components de base fournis par MUI et l'utilisation des
        feuilles CSS pour la stylisation de plus grand components tels que les
        layouts qui regroupent headers et footers par exemple.
        <br />
        L'utilisation du thème MUI pour les composants de base fournis par MUI
        permet de maintenir une cohérence dans l'apparence des composants et
        facilite leur personnalisation. D'autre part, l'utilisation de feuilles
        de styles CSS pour les composants personnalisés permet de bénéficier des
        avantages de la cascade CSS et de la réutilisation de styles, tout en
        gardant la souplesse et la flexibilité offertes par CSS.
      </Typography>
    </Box>
  );
};

export default MyReactPersonnalisation;
