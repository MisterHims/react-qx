import { MetaData } from "../../../../components/elements/utils/seo/MetaData";
import { Box } from "@mui/material";

const MyReactPresentation = () => {
  MetaData("Présentation - myReact", "Demo meta description");
  return (
    <Box component="main" className="content">
      MyReactPresentation
    </Box>
  );
};

export default MyReactPresentation;
