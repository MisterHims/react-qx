import { Link } from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material';
import QxButton from '../../components/elements/utils/buttons/QxButton';

const Home = () => {
  return (
    <Box component="main" className="content">
      <Typography component="h1" variant='h2' color="neutral" gutterBottom>L'obstination <br /> est le chemin de la réussite.</Typography>
        <Typography gutterBottom>
          Utilisons-là à bon escient et réussissons là où d'autres ont échoués. Et ne jamais oublier que c'est en tombant qu'on apprend à se relever.
        </Typography>
        {/* <QxButton to="/docs" variant="contained" size="large"> Outlined Button </QxButton> */}
        <Button variant="contained" component={Link} to="/docs" color="primary" size="large">
          Get started
        </Button>
    </Box>
  );
};

export default Home;
