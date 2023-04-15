import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

import "../../../../build/styles/layouts/footer.css";

const Footer = () => {
  return (
    <Box component="footer" role="contentinfo">
      <Container className="footer-links" maxWidth="sm">
        <Typography variant="body2">
          {"©"}{new Date().getFullYear()} myReact - Un projet réalisé avec React TypeScript et Vite
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
