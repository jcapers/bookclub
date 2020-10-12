import React from "react";
import { Link as RouterLink } from 'react-router-dom';
// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
// MATERIAL ICONS
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// COMPONENTS
import Register from '../../components/auth/Register'


export default function RegisterScreen() {
  const classes = useStyles();
  
  return (
    <Container className={classes.root}>
      <Box display="flex" flexDirection="column" justifyContent="center" className={classes.section}>
        <Typography variant="h5">
            Register for the Book Club!
        </Typography>
        <Typography variant="body1">
            Already have an account? <Link component={RouterLink} to="/login" color="primary" underline="hover">
              Go to Login! </Link>
        </Typography>
      </Box>

      <Box display="flex" flexDirection="column" justifyContent="center" className={classes.section}>
        <Register />
      </Box>

      <Box display="flex" flexDirection="row" justifyContent="center" alignContent="center" className={classes.section}>
        <ArrowBackIosIcon />
        <Link component={RouterLink} to="/" color="primary" underline="hover">
          <Typography variant="button" >
            Go back to home page! 
          </Typography>
        </Link>
      </Box>
    </Container>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  section: {
    marginBottom: theme.spacing(1)
  }
}));
