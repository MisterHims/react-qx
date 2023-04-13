import SearchBar from "../../elements/inputs/search-bar/SearchBar";
import SidebarTopLinks from "./SidebarTopLinks";
import { SideBarExercicesLinks } from "./SideBarLinks";

import "../../../../build/styles/layouts/sidebar.css";

const MainSidebarExercices = () => {
  return (
    <div className="sidebar flex">
      <nav id="nav" className="sidebar-container lg:text-sm lg:leading-6">
        <div className="sidebar-content">
          <SearchBar />
          <SidebarTopLinks />
          <SideBarExercicesLinks />
        </div>
      </nav>
    </div>
  );
};

export default MainSidebarExercices;