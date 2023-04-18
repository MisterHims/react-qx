import { MetaData } from "../../../../components/elements/utils/seo/MetaData";
import { Box, Typography } from "@mui/material";

const PostCSSExercice01 = () => {
  MetaData("Exercice 1 - PostCSS - myReact", "Demo meta description");
  return (
    <Box component="main" className="content">
      <Typography variant="body1">
        Vous êtes sur ma page d'exercice n°1 concernant PostCSS !
      </Typography>
    </Box>
  );
};

export default PostCSSExercice01;
