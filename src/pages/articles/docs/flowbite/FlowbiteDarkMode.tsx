import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const FlowbiteDarkMode = () => {
  return (
    <Box component="main" className="content">
      <Typography variant='body1'>Raté - N'a pas réussi</Typography>
      <Typography variant='body1'>
        Le document utilisé pour la mise en place d'un bouton fonctionnel afin
        de basculer dans le mode de son choix est destiné à un format JS et non
        pas TSX.
      </Typography>
      <Link title="Tailwind CSS Dark Mode - Flowbite" to="https://flowbite.com/docs/customize/dark-mode/#content">Tailwind CSS Dark Mode - Flowbite</Link>
    </Box>
  );
};

export default FlowbiteDarkMode;
