import { HeaderBackgroundClassic } from "./sub-headers/HeaderBackgrounds";
import MyReactLogotype from "./sub-headers/MyReactLogotype";
import HeaderNotificationBar from "./sub-headers/HeaderNotificationBar";
import HeaderLinks from "./sub-headers/HeaderLinks";
import HeaderTools from "./sub-headers/HeaderTools";

import "../../../../build/styles/layouts/header.css";

interface HeaderProps {
  template: "full" | "article";
  showNotificationBar: boolean;
}

const Header = (props: HeaderProps) => {
  return (
    <header>
      <HeaderBackgroundClassic />
      <div className={`header-wrapper template-${props.template}`}>
        <div className="header-container">
          <div className="header-content">
            <MyReactLogotype />
            {props.showNotificationBar && <HeaderNotificationBar />}
            <div className="header-quick-access">
              <HeaderLinks />
              <HeaderTools />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
