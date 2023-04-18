import SearchBar from "../../elements/inputs/search-bar/SearchBar";
import SidebarTopLinks from "./SidebarTopLinks";
import { SideBarDocsLinks } from "./SideBarLinks";

import "../../../../build/styles/layouts/sidebar.css";

const MainSideBarDocs = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar-container">
        <div className="sidebar-content">
          <SearchBar />
          <SidebarTopLinks />
          <SideBarDocsLinks />
        </div>
      </nav>
    </div>
  );
};

export default MainSideBarDocs;
