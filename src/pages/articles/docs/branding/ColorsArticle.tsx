import PrimaryColorsIMG from "../../../../assets/images/react-colors/primary-colors.png"
import TonicColorsIMG from "../../../../assets/images/react-colors/tonic-colors.png";
import ComplementaryColors from "../../../../assets/images/react-colors/complementary-colors.png"
import TonedColorsPhotoshop from "../../../../assets/images/react-colors/toned-colors-making.jpg"
import ComplementaryChoice from "../../../../assets/images/react-colors/complementary-choice-colors.png"
import { Box, Typography } from "@mui/material";

const ColorsArticle = () => {
  return (
    <Box component="main" className="content">
        <h1>Choix des couleurs</h1>
        <Typography variant='body1'>Le choix des couleurs sélectionnées et leurs utilisations à travers notre projet React peut-être défini
            de plusieurs façons. Celle-ci est, à mon gout, bien la plus rapide et la plus efficace.
        </Typography>
        <Typography variant='body1'>
            Dans un premier temps, il est important d'avoir en tête une couleur principale que l'on souhaite utilisée
            le plus régulièrement dans notre projet. Pour notre cas, le bleu clair a été sélectionné et le fond sombre
            ci-dessous tends légèrement vers cette teinte :
        </Typography>
        <img src={PrimaryColorsIMG} />
        <Typography variant='body1'>
            Il est ensuite très utile de créer plusieurs niveaux de cette couleur, en jouant par exemple avec le mode de couleur Lab de Photoshop qui repose sur la perception de la couleur par l’œil humain.
            De cette façon, il est bien plus facile de créer un aspect de luminosité plus pertinent.
            Nous avons ainsi dérivé plusieurs niveaux de couleurs compris entre notre thème clair et sombre par unités de 10.
        </Typography>
        <img src={TonedColorsPhotoshop} />
        <Typography variant='body1'>
            La couleur bleue en question est considérée comme étant une tonique, c'est à dire une couleur qui sera très régulièrement utilisée et reconnaissable afin d'attirer le regard de l'utilisateur.
            Elle peut-être utilisée par exemple pour des Call-to-Action tels que des boutons.
        </Typography>
        <img src={TonicColorsIMG} />
        <Typography variant='body1'>
            Cette couleur peut également être utilisée d'autres façons, comme par exemple  en jouant avec son opacité sur un fond de couleur clair ou sombre (voir ci-dessus).
        </Typography>
        <Typography variant='body1'>
            Une autre couleur très importante à utiliser est la couleur complémentaire. Elle se trouve être généralement une couleur drastiquement opposée à notre tonique (le bleu clair défini plus au dessus) :
        </Typography>
        <img src={ComplementaryChoice} />
        <Typography variant='body1'>
            Voici donc la couleur complémentaire que nous avons ainsi trouvée :
        </Typography>
        <img src={ComplementaryColors} />
        <Typography variant='body1'>
            Cette couleur complémentaire pourra être utilisée à travers certains éléments faisant partie de notre branding mais n'ayant pas forcément d'appel à l'action pour l'utilisateur.
            Il n'est ainsi pas d'usage de l'utiliser pour des boutons par exemple.
        </Typography>
        <h2>Listing des différentes couleurs</h2>
        <h3>Couleurs primaires</h3>
        <h4>Global Theme - Light</h4>
        <ul>
            <li><Typography variant='body1'><strong>.primary-color-light: </strong> rgb(249, 254, 255)</Typography></li>
            <li><Typography variant='body1'>.primary-color-200: rgb(220, 226, 253)</Typography></li>
            <li><Typography variant='body1'>.primary-color-300: rgb(192, 198, 224)</Typography></li>
            <li><Typography variant='body1'>.primary-color-400: rgb(165, 171, 187)</Typography></li>
            <li><Typography variant='body1'>.primary-color-500: rgb(139, 144, 169)</Typography></li>
            <li><Typography variant='body1'>.primary-color-600: rgb(113, 118, 143)</Typography></li>
            <li><Typography variant='body1'>.primary-color-700: rgb(88, 94, 117)</Typography></li>
            <li><Typography variant='body1'>.primary-color-800: rgb(65, 70, 92)</Typography></li>
            <li><Typography variant='body1'>.primary-color-900: rgb(45, 45, 81)</Typography></li>
            <li><Typography variant='body1'><strong>.primary-color-dark: </strong> rgb(21, 27, 46)</Typography></li>
        </ul>
        <h4>Global Theme - Dark</h4>
        <ul>
            <li><Typography variant='body1'><strong>.primary-color-dark: </strong> rgb(21, 27, 46)</Typography></li>
            <li><Typography variant='body1'>.primary-color-200: rgb(45, 45, 81)</Typography></li>
            <li><Typography variant='body1'>.primary-color-300: rgb(65, 70, 92)</Typography></li>
            <li><Typography variant='body1'>.primary-color-400: rgb(88, 94, 117)</Typography></li>
            <li><Typography variant='body1'>.primary-color-500: rgb(113, 118, 143)</Typography></li>
            <li><Typography variant='body1'>.primary-color-600: rgb(139, 144, 169)</Typography></li>
            <li><Typography variant='body1'>.primary-color-700: rgb(165, 171, 187)</Typography></li>
            <li><Typography variant='body1'>.primary-color-800: rgb(192, 198, 224)</Typography></li>
            <li><Typography variant='body1'>.primary-color-900: rgb(220, 226, 253)</Typography></li>
            <li><Typography variant='body1'><strong>.primary-color-light: </strong> rgb(249, 254, 255)</Typography></li>
        </ul>
        <h3>Couleur tonique</h3>
        <ul>
            <li><Typography variant='body1'>.blue-color-100: rgb(125, 244, 255)</Typography></li>
            <li><Typography variant='body1'>.blue-color-200: rgb(106, 227, 255)</Typography></li>
            <li><Typography variant='body1'>.blue-color-300: rgb(88, 213, 255)</Typography></li>
            <li><Typography variant='body1'>.blue-color-400: rgb(69, 199, 255)</Typography></li>
            <li><Typography variant='body1'><strong>.blue-color-500</strong>: rgb(47, 185, 243)</Typography></li>
            <li><Typography variant='body1'>.blue-color-600: rgb(8, 171, 229)</Typography></li>
            <li><Typography variant='body1'>.blue-color-700: rgb(0, 158, 215)</Typography></li>
            <li><Typography variant='body1'>.blue-color-800: rgb(0, 145, 201)</Typography></li>
            <li><Typography variant='body1'>.blue-color-900: rgb(0, 130, 185)</Typography></li>
        </ul>
        <h3>Couleur complémentaire</h3>
        <ul>
            <li><Typography variant='body1'>.pink-color-100: rgb(255, 147, 218)</Typography></li>
            <li><Typography variant='body1'>.pink-color-200: rgb(255, 130, 206)</Typography></li>
            <li><Typography variant='body1'>.pink-color-300: rgb(255, 98, 178)</Typography></li>
            <li><Typography variant='body1'>.pink-color-400: rgb(255, 61, 152)</Typography></li>
            <li><Typography variant='body1'><strong>.pink-color-500</strong>: rgb(254, 0, 127)</Typography></li>
            <li><Typography variant='body1'>.pink-color-600: rgb(211, 0, 94)</Typography></li>
            <li><Typography variant='body1'>.pink-color-700: rgb(190, 0, 78)</Typography></li>
            <li><Typography variant='body1'>.pink-color-800: rgb(158, 0, 56)</Typography></li>
            <li><Typography variant='body1'>.pink-color-900: rgb(148, 0, 47)</Typography></li>
        </ul>
    </Box>
  )
}

export default ColorsArticle