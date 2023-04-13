import SearchBar from "../../elements/inputs/search-bar/SearchBar";
import SidebarTopLinks from "./SidebarTopLinks";
import { SideBarDocsLinks } from "./SideBarLinks";

import "../../../../build/styles/layouts/sidebar.css";

const MainSideBarDocs = () => {
  return (
    <div className="sidebar flex">
      <nav id="nav" className="sidebar-container lg:text-sm lg:leading-6">
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
