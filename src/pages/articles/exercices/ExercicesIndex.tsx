import { MetaData } from "../../../components/elements/utils/seo/MetaData";
import { Box } from "@mui/material";

const ExercicesIndex = () => {
  MetaData("Exercice 1 - Typescript - myReact", "Demo meta description");
  return (
    <Box component="main" className="content">
      ExercicesIndex
    </Box>
  );
};

export default ExercicesIndex;
