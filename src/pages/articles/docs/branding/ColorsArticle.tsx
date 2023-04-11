import PrimaryColorsIMG from "../../../../assets/images/react-colors/primary-colors.png"
import TonicColorsIMG from "../../../../assets/images/react-colors/tonic-colors.png";
import ComplementaryColors from "../../../../assets/images/react-colors/complementary-colors.png"
import TonedColorsPhotoshop from "../../../../assets/images/react-colors/toned-colors-making.jpg"
import ComplementaryChoice from "../../../../assets/images/react-colors/complementary-choice-colors.png"

const ColorsArticle = () => {
  return (
    <div className='content'>
        <h1>Choix des couleurs</h1>
        <p>Le choix des couleurs sélectionnées et leurs utilisations à travers notre projet React peut-être défini
            de plusieurs façons. Celle-ci est, à mon gout, bien la plus rapide et la plus efficace.
        </p>
        <p>
            Dans un premier temps, il est important d'avoir en tête une couleur principale que l'on souhaite utilisée
            le plus régulièrement dans notre projet. Pour notre cas, le bleu clair a été sélectionné et le fond sombre
            ci-dessous tends légèrement vers cette teinte :
        </p>
        <img src={PrimaryColorsIMG} />
        <p>
            Il est ensuite très utile de créer plusieurs niveaux de cette couleur, en jouant par exemple avec le mode de couleur Lab de Photoshop qui repose sur la perception de la couleur par l’œil humain.
            De cette façon, il est bien plus facile de créer un aspect de luminosité plus pertinent.
            Nous avons ainsi dérivé plusieurs niveaux de couleurs compris entre notre thème clair et sombre par unités de 10.
        </p>
        <img src={TonedColorsPhotoshop} />
        <p>
            La couleur bleue en question est considérée comme étant une tonique, c'est à dire une couleur qui sera très régulièrement utilisée et reconnaissable afin d'attirer le regard de l'utilisateur.
            Elle peut-être utilisée par exemple pour des Call-to-Action tels que des boutons.
        </p>
        <img src={TonicColorsIMG} />
        <p>
            Cette couleur peut également être utilisée d'autres façons, comme par exemple  en jouant avec son opacité sur un fond de couleur clair ou sombre (voir ci-dessus).
        </p>
        <p>
            Une autre couleur très importante à utiliser est la couleur complémentaire. Elle se trouve être généralement une couleur drastiquement opposée à notre tonique (le bleu clair défini plus au dessus) :
        </p>
        <img src={ComplementaryChoice} />
        <p>
            Voici donc la couleur complémentaire que nous avons ainsi trouvée :
        </p>
        <img src={ComplementaryColors} />
        <p>
            Cette couleur complémentaire pourra être utilisée à travers certains éléments faisant partie de notre branding mais n'ayant pas forcément d'appel à l'action pour l'utilisateur.
            Il n'est ainsi pas d'usage de l'utiliser pour des boutons par exemple.
        </p>
        <h2>Listing des différentes couleurs</h2>
        <h3>Couleurs primaires</h3>
        <h4>Global Theme - Light</h4>
        <ul>
            <li><p><strong>.primary-color-light: </strong> rgb(249, 254, 255)</p></li>
            <li><p>.primary-color-200: rgb(220, 226, 253)</p></li>
            <li><p>.primary-color-300: rgb(192, 198, 224)</p></li>
            <li><p>.primary-color-400: rgb(165, 171, 187)</p></li>
            <li><p>.primary-color-500: rgb(139, 144, 169)</p></li>
            <li><p>.primary-color-600: rgb(113, 118, 143)</p></li>
            <li><p>.primary-color-700: rgb(88, 94, 117)</p></li>
            <li><p>.primary-color-800: rgb(65, 70, 92)</p></li>
            <li><p>.primary-color-900: rgb(45, 45, 81)</p></li>
            <li><p><strong>.primary-color-dark: </strong> rgb(21, 27, 46)</p></li>
        </ul>
        <h4>Global Theme - Dark</h4>
        <ul>
            <li><p><strong>.primary-color-dark: </strong> rgb(21, 27, 46)</p></li>
            <li><p>.primary-color-200: rgb(45, 45, 81)</p></li>
            <li><p>.primary-color-300: rgb(65, 70, 92)</p></li>
            <li><p>.primary-color-400: rgb(88, 94, 117)</p></li>
            <li><p>.primary-color-500: rgb(113, 118, 143)</p></li>
            <li><p>.primary-color-600: rgb(139, 144, 169)</p></li>
            <li><p>.primary-color-700: rgb(165, 171, 187)</p></li>
            <li><p>.primary-color-800: rgb(192, 198, 224)</p></li>
            <li><p>.primary-color-900: rgb(220, 226, 253)</p></li>
            <li><p><strong>.primary-color-light: </strong> rgb(249, 254, 255)</p></li>
        </ul>
        <h3>Couleur tonique</h3>
        <ul>
            <li><p>.blue-color-100: rgb(125, 244, 255)</p></li>
            <li><p>.blue-color-200: rgb(106, 227, 255)</p></li>
            <li><p>.blue-color-300: rgb(88, 213, 255)</p></li>
            <li><p>.blue-color-400: rgb(69, 199, 255)</p></li>
            <li><p><strong>.blue-color-500</strong>: rgb(47, 185, 243)</p></li>
            <li><p>.blue-color-600: rgb(8, 171, 229)</p></li>
            <li><p>.blue-color-700: rgb(0, 158, 215)</p></li>
            <li><p>.blue-color-800: rgb(0, 145, 201)</p></li>
            <li><p>.blue-color-900: rgb(0, 130, 185)</p></li>
        </ul>
        <h3>Couleur complémentaire</h3>
        <ul>
            <li><p>.pink-color-100: rgb(255, 147, 218)</p></li>
            <li><p>.pink-color-200: rgb(255, 130, 206)</p></li>
            <li><p>.pink-color-300: rgb(255, 98, 178)</p></li>
            <li><p>.pink-color-400: rgb(255, 61, 152)</p></li>
            <li><p><strong>.pink-color-500</strong>: rgb(254, 0, 127)</p></li>
            <li><p>.pink-color-600: rgb(211, 0, 94)</p></li>
            <li><p>.pink-color-700: rgb(190, 0, 78)</p></li>
            <li><p>.pink-color-800: rgb(158, 0, 56)</p></li>
            <li><p>.pink-color-900: rgb(148, 0, 47)</p></li>
        </ul>
    </div>
  )
}

export default ColorsArticle