import { MetaData } from "../../../../components/elements/utils/seo/MetaData";
import { Box } from "@mui/material";

const MaterialUIExercice03 = () => {
  MetaData("Exercice 3 - Material UI - myReact", "Demo meta description");
  return (
    <Box component="main" className="content">
      Créer son propre thème :
      https://mui.com/material-ui/customization/palette/#adding-new-colors{" "}
      <br />
      Custom CSS avec Material UI
    </Box>
  );
};

export default MaterialUIExercice03;
