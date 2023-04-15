import { useTheme } from "@mui/material/styles";
import React, { useContext, useEffect, useState } from "react";
import { ColorModeContext } from "../theme-provider/MainTheme";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

localStorage.clear();

function getDefaultMode() {
  const savedMode = localStorage.getItem("mode");
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  return savedMode ? savedMode : prefersDark ? "dark" : "light";
}

const MuiDarkClassButton = () => {
  const [mode, setMode] = useState(getDefaultMode());
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  useEffect(() => {
    // Toggle dark mode class on body element
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Save mode to local storage
    localStorage.setItem("mode", mode);
  }, [mode]);

  // Toggle mode between light and dark
  const toggleMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
    colorMode.toggleColorMode();
  };

  return (
    <IconButton
      sx={{ ml: 1 }}
      onClick={toggleMode}
      color="inherit"
      aria-label={
        theme.palette.mode === "dark"
          ? "Activer le mode clair"
          : "Activer le mode sombre"
      }
    >
      {theme.palette.mode === "dark" ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );
};

export default MuiDarkClassButton;
