import { ReactNode } from "react";
import Header from "../layouts/headers/Header";
import { FullContent } from "../layouts/contents/Content";
import Footer from "../layouts/footers/Footer";

// Import Animated Background
import ParticlesBackground from "../elements/utils/backgrounds/ParticlesBackground";

// Import Style(s)
import "../../../build/styles/templates/one-view-template.css";


type Props = {
  children: ReactNode;
};

const FullTemplate = ({ children }: Props) => {
  return (
  <div className="full-wrapper">
    <Header template="full" showNotificationBar={false} />
    <div className="full-container">
      <FullContent>{children}</FullContent>
      <Footer />
    </div>
    <ParticlesBackground />
  </div>
  );
};

export { FullTemplate };
