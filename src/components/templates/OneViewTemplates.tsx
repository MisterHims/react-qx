import { ReactNode } from "react";
import Header from "../layouts/headers/Header";
import { HomeContent } from "../layouts/contents/Content";
import Footer from "../layouts/footers/Footer";

// Import Animated Background
import ParticlesBackground from "../elements/utils/backgrounds/ParticlesBackground";

// Import Style(s)
import "../../../build/styles/templates/one-view-template.css";


type Props = {
  children: ReactNode;
};

const HomeTemplate = ({ children }: Props) => {
  return (
  <div className="home-wrapper">
    <Header template="home" showNotificationBar={false} />
    <div className="home-container">
      <HomeContent>{children}</HomeContent>
      <Footer />
    </div>
    <ParticlesBackground />
  </div>
  );
};

export { HomeTemplate };
