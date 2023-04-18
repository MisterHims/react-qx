import { MetaData } from "../../../../components/elements/utils/seo/MetaData";
import { Box, Typography } from "@mui/material";

const PostCSSPresentation = () => {
  MetaData("Présentation - PostCSS - myReact", "Demo meta description");
  return (
    <Box component="main" className="content">
      <Typography variant="body1">
        PostCSS ne fait pas que transpiler le code CSS comme le fait Babel mais
        il le rend également entièrement fonctionnel sur les vieux navigateurs
        ou basés sur d'autres plugins que l'on souhaiterait installer.
      </Typography>
    </Box>
  );
};

export default PostCSSPresentation;
