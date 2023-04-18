import { MetaData } from "../../../../components/elements/utils/seo/MetaData";
import { Box } from "@mui/material";

const MyReactInstallation = () => {
  MetaData("Installation - myReact", "Demo meta description");
  return (
    <Box component="main" className="content">
      MyReactInstallation
    </Box>
  );
};

export default MyReactInstallation;
