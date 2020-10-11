import React from "react";
import { Component } from "react";
import { Link as RouterLink } from 'react-router-dom';
// MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
// MATERIAL ICONS
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


class Login extends Component {

  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
  /*
  * Sets state for event context id with value in form field.
  * @event Registration#onFormChange
  */
  onChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  /*
  * Import - disables default behaviour where page re-rendered onSubmit.
  * @event Registration#onSubmit
  */
  onSubmit = (event) => {
    event.preventDefault();

    const userDetails = {
      email: this.state.email,
      password: this.state.password
    };

    console.log(userDetails);
  }

  render() {
    console.log(this.newUser);
    const { classes } = this.props;
    const { errors } = this.state;

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

        <form className={classes.form} onSubmit={this.onSubmit}>
          <Box className={classes.section}>
            <FormControl margin="dense">
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input
                id="email"
                type="email"
                value={this.state.email}
                onChange={this.onChange}
                errors={errors.email}
                startAdornment={
                  <InputAdornment position="start">
                    <EmailOutlinedIcon />
                  </InputAdornment>
                }>
              </Input>
            </FormControl>
          </Box>

          <Box className={classes.section}>
            <FormControl margin="dense">
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
                type="password"
                value={this.state.password}
                onChange={this.onChange}
                errors={errors.password}
                startAdornment={
                  <InputAdornment position="start">
                    <LockOutlinedIcon />
                  </InputAdornment>
                }>
              </Input>
            </FormControl>
          </Box>

          <Box className={classes.section}> 
            <Button 
              type="submit"
              variant="outlined" 
              color="primary" 
              className={classes.button}
            >
              Login
            </Button>
          </Box>
        </form>

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

}

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  section: {
    margin: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(1)
  },
  form: {
    margin: theme.spacing(1)
  }
});


export default withStyles(styles, { withTheme: true })(Login);