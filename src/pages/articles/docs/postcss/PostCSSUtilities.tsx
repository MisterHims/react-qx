import { MetaData } from "../../../../components/elements/utils/seo/MetaData";
import { Box, Typography } from '@mui/material'

const PostCSSUtilities = () => {
  MetaData("PostCSS Utilities - PostCSS - myReact", "Demo meta description");
  return (
    <Box component="main" className="content">
        <Typography variant='h2'>PostCSSUtilities</Typography>
        <Typography variant='h3'>Que sont les Utilities</Typography>
        <Typography variant='body1'>
            Les "Utilities" sont des @mixins déjà post-configurés afin d'obtenir une portabilité maximale sur de nombreux navigateurs.
            Il est ainsi possible de rapidement pouvoir styliser un séparateur hr à travers les arguments que composent notre @util hr(#000, 20px, dotted, 3px);
            Voir la document à propos de l'Utilities hr <a href='https://ismamz.github.io/postcss-utilities/docs#horizontal-rule'>ici</a>.
        </Typography>
        <Typography variant='body1'>
            Une documentation bien plus précise est également disponible à travers ce lien : <a href="https://ismamz.github.io/postcss-utilities/">https://ismamz.github.io/postcss-utilities/</a>
        </Typography>
    </Box>
  )
}

export default PostCSSUtilities