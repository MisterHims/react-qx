import ReactDarkModeButton from "../../../utils/icon-button/ReactDarkModeButton";
import GitHubButton from "../../../utils/icon-button/GitHubButton";
import MuiDarkModeButton from "../../../utils/icon-button/MuiDarkModeButton";

const HeaderTools = () => {
  return (
    <div className="header-tools">
      <MuiDarkModeButton />
      <GitHubButton />
    </div>
  );
}

export default HeaderTools