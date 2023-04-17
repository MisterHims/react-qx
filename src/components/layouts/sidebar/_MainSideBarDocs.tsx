import SearchBar from "../../elements/inputs/search-bar/SearchBar";
import SidebarTopLinks from "./SidebarTopLinks";
import { SideBarDocsLinks } from "./SideBarLinks";

import "../../../../build/styles/layouts/sidebar.css";
import { FixedSizeList } from "react-window";

const Row = () => (
  <nav id="nav" className="sidebar-container">
    <div className="sidebar-content">
      {/*<SearchBar />*/}
      <SidebarTopLinks />
      <SideBarDocsLinks />
    </div>
  </nav>
);

const MainSideBarDocs = () => (
  <FixedSizeList
    className="sidebar"
    height={500}
    width="20rem"
    itemSize={120}
    itemCount={1}
    style={{ height: "calc(100vh - 4rem - 1px)" }}
  >
    {Row}
  </FixedSizeList>
);

export default MainSideBarDocs;
