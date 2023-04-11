import { Link } from 'react-router-dom'
import { Box, Button } from '@mui/material';
import QxButton from '../../components/utils/buttons/QxButton';
import CustomButton from '../../components/utils/buttons/CustomButton'

const Home = () => {
  return (
    <div className="content">
        <h1 className="font-extrabold sm:text-5xl lg:text-6xl tracking-tight">
          L'obstination <br/> est le chemin de la réussite.
        </h1>
        <p>
          Utilisons-là à bon escient et réussissons là où d'autres ont échoués. Et ne jamais oublier que c'est en tombant qu'on apprend à se relever.
        </p>
        
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
