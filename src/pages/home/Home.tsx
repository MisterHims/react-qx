import { Link } from 'react-router-dom'
import { Link as MuiLink } from '@mui/material';
import { Box, Button, Typography } from '@mui/material';
import QxButton from '../../components/elements/utils/buttons/QxButton';

const Home = () => {
  return (
    <Box component="main" className="content homepage-content">
      <Typography className='welcoming-message' variant="h1" gutterBottom>
        L'obstination <br /> est le chemin de la réussite.
      </Typography>
      <Typography gutterBottom>
        Utilisons-là à bon escient et réussissons là où d'autres ont échoués. Et
        ne jamais oublier que c'est en tombant qu'on apprend à se relever.
      </Typography>
      {/* <QxButton to="/docs" variant="contained" size="large"> Outlined Button </QxButton> */}
      <Button variant="contained" component={Link} to="/docs" color="primary" size="large" >
        Get started
      </Button>
    </Box>
  );
};

export default Home;
