import React from "react";
import { Link as RouterLink } from 'react-router-dom';
// MATERIAL UI
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
// MATERIAL ICONS
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// COMPONENTS
import Login from '../../components/auth/Login'


export default function LoginScreen() {

  return (
    <Container className={classes.root}>
      <Box display="flex" flexDirection="column" justifyContent="center" className={classes.section}>
        <Typography variant="h5">
          Login to the Book Club!
        </Typography>
        <Typography variant="body1">
          Don't have an account? <Link component={RouterLink} to="/register" color="primary" underline="none">
            Go to registration! </Link>
        </Typography>
      </Box>

      <Box>
        <Login />
      </Box>
      
      <Box display="flex" flexDirection="row" justifyContent="center" alignContent="center" className={classes.section}>
        <ArrowBackIosIcon />
        <Link component={RouterLink} to="/" color="primary" underline="none">
          <Typography variant="button" >
            Go back to home page! 
          </Typography>
        </Link>
      </Box>
    </Container>
  )
}


const classes = (theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1)
  }
});
