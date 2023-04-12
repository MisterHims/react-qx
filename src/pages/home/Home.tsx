import { Link } from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material';
import QxButton from '../../components/utils/buttons/QxButton';

const Home = () => {
  return (
    <div className="content">
      <Typography component="h1" variant='h2' color="secondary">L'obstination <br /> est le chemin de la réussite.</Typography>
        <Typography>
          Utilisons-là à bon escient et réussissons là où d'autres ont échoués. Et ne jamais oublier que c'est en tombant qu'on apprend à se relever.
        </Typography>
        {/* <QxButton to="/docs" variant="contained" size="large"> Outlined Button </QxButton> */}
        <Button variant="contained" component={Link} to="/docs" color="primary" size="large">
          MUI Button
        </Button>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
          p: 3,
        }}
      >
      </Box>
    </div>
  );
};

export default Home;
