import MuiClassNameSetup from "./components/utils/styling-functions/MuiClassNameSetup";
// ...other component imports

// Import Router
import { BrowserRouter } from "react-router-dom";

// Import Main Components
import MainRoutes from "./routes/MainRoutes";

// Import Main Style(s)
import "../build/styles/global/global.css"
import "../build/styles/global/app.css";
import "../build/styles/global/colors.css";

import { Global, css } from '@emotion/react';

import MainTheme from "./components/utils/theme-provider/MainTheme";

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