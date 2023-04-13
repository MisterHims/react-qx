// Permet de définir un nouveau prefix pour les classes css des components Mui.
// Exemple : MuiButton => QxButton
import MuiClassNameSetup from "./components/elements/utils/styling-functions/MuiClassNameSetup";

// Import Router
import { BrowserRouter } from "react-router-dom";

// Import Main Components
import MainRoutes from "./routes/MainRoutes";

// Import Mui Theme
import MainTheme from "./components/elements/utils/theme-provider/MainTheme";

// Import Main Style(s)
import "../build/styles/global/global.css"
import "../build/styles/global/app.css";
import "../build/styles/global/colors.css";

function App() {
  return (
    <BrowserRouter>
      <MuiClassNameSetup />
      <MainTheme>
        <div className="App">
          <MainRoutes />
        </div>
      </MainTheme>
    </BrowserRouter>
  );
}

export default App;