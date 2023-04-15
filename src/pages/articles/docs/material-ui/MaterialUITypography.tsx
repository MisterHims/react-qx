import { Box, Typography } from "@mui/material"

const MaterialUITypography = () => {
  return (
    <Box component="main" className="content">
        <Typography variant="body1">Voici les 6 variantes de titres par défaut fourni avec Material UI :</Typography>
        <Typography variant="h1"> H1 Heading </Typography>
        <Typography variant="h2"> H2 Heading </Typography>
        <Typography variant="h3"> H3 Heading </Typography>
        <Typography variant="h4"> H4 Heading </Typography>
        <Typography variant="h5"> H5 Heading </Typography>
        <Typography variant="h6"> H6 Heading </Typography>
        <Typography variant="body1" style={{ backgroundColor: '#686868' }}>Il existe également deux autres variantes :</Typography>
        <Typography variant="subtitle1"> Subtitle 1 </Typography>
        <Typography variant="subtitle2"> Subtitle 2 </Typography>
        <Typography variant="body1" style={{ backgroundColor: '#686868' }}> Deux variantes de paragraphe : </Typography>
        <Typography variant="body1"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut deserunt fuga debitis excepturi ab sunt quam ipsa provident, odio, ratione facilis sapiente iusto dolores quo dignissimos quisquam! Earum, quae animi. </Typography>
        <Typography variant="body2"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio aliquid laudantium fugit nostrum a accusantium, voluptas soluta esse quos qui, adipisci eius maiores dignissimos quia ratione beatae modi ea! Asperiores. </Typography>
    </Box>
  )
}

export default MaterialUITypography