import { MetaData } from "../../../components/elements/utils/seo/MetaData";
import { Box } from "@mui/material";

const DocsIndex = () => {
  MetaData("Documentation - myReact", "Demo meta description");
  return (
    <Box component="main" className="content">
      DocsIndex
    </Box>
  );
};

export default DocsIndex;
