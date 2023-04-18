import { MetaData } from "../../../../components/elements/utils/seo/MetaData";
import { Box } from "@mui/material";

const MaterialUI = () => {
  MetaData("Présentation - Material UI - myReact", "Demo meta description");
  return (
    <Box component="main" className="content">
      MaterialUI
    </Box>
  );
};

export default MaterialUI;
