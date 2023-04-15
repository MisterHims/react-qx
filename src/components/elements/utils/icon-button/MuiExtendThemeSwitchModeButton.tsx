import { Button, useColorScheme } from "@mui/material";

const MuiExtendThemeSwitchModeButton = () => {
  const { mode, setMode } = useColorScheme();
  
  return (
    <Button
      variant="outlined"
      onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
    >
      {mode === 'light' ? 'Dark' : 'Light'}
    </Button>
  );
};

export default MuiExtendThemeSwitchModeButton;