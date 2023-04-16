import { Button, Typography } from "@mui/material"
import { Link, useNavigate } from 'react-router-dom';

const Page404Error = () => {
  	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
  return (
    <div className='content errorpage-content'>
      <Typography className="error-code" variant='h1' color="error">404</Typography>
      <Typography className="error-text" variant='h2' color="error"> Page non trouvée </Typography>
      <Typography>Désolé, nous n'avons pas trouvé la page que vous cherchiez.</Typography>
      <Button sx={{ marginRight: '0.75rem' }} variant="outlined" component={Link} to="/" color="primary" size="large">
        Revenir à la page d'accueil
      </Button>
      <Button sx={{ marginLeft: '0.75rem' }} variant="contained" component={Link} to="#" onClick={goBack} color="primary" size="large">
        Retourner en arrière
      </Button>
    </div>
  )
}

export default Page404Error