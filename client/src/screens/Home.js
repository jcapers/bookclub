import React from "react";
import { Component } from "react";
import { Link as RouterLink } from 'react-router-dom';
// MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class Home extends Component {

  render() {
    const { classes } = this.props;

    return (
      <Container className={classes.root}>
        <Typography variant="h3">
            Welcome to the Book Club!
        </Typography>
        <Box display="flex" justifyContent="center">
          <Button 
            component={RouterLink} to="/register" 
            variant="outlined" 
            color="primary" 
            className={classes.button}>
            Register
          </Button>
          <Button 
            component={RouterLink} to="/login" 
            variant="outlined" 
            color="primary" 
            className={classes.button}>
            Log In
          </Button>
        </Box>

      </Container>
    )
  }
}


const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1)
  }
});


export default withStyles(styles, { withTheme: true })(Home);