import { Container } from "@mui/material";

import "../../../../build/styles/layouts/footer.css";

const Footer = () => {
  return (
    <footer role="contentinfo">
      <Container className="footer-links">
        <p>
          ©2023 myReact - Un projet réalisé avec React TypeScript et Vite
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
