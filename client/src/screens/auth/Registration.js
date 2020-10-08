import React from "react";
import { Component } from "react";
import { Link as RouterLink } from 'react-router-dom';
// MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
// MATERIAL ICONS
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


class Registration extends Component {

  constructor() {
    super();
    this.state = {
      name: "",
      displayName: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
    this.newUser = {
      name: this.state.name,
      displayName: this.state.displayName,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
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
  }

  render() {
    console.log(this.newUser);
    const { classes } = this.props;
    const { errors } = this.state;
    const preventDefault = (event) => event.preventDefault();

    return (
      <Container className={classes.root}>
        <Box display="flex" flexDirection="column" justifyContent="center" className={classes.section}>
          <Typography variant="h5">
              Register for the Book Club!
          </Typography>
          <Typography variant="body1">
              Already have an account? <Link component={RouterLink} to="/login" onClick={preventDefault} color="primary" underline="none">
                Go to Login! </Link>
          </Typography>
        </Box>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <FormControl margin="dense">
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              id="name"
              type="name"
              value={this.state.name} 
              onChange={this.onChange}
              error={errors.name}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircleOutlinedIcon />
                </InputAdornment>
              }>
            </Input>
          </FormControl>

          <FormControl margin="dense"> 
            <InputLabel htmlFor="displayName">Display Name</InputLabel>
            <Input
              id="displayName"
              type="displayName"
              value={this.state.displayName} 
              onChange={this.onChange}
              error={errors.displayName}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircleOutlinedIcon />
                </InputAdornment>
              }>
            </Input>
            <FormHelperText id="helper-displayName">Enter the name you want people to see!</FormHelperText>
          </FormControl>

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
            <FormHelperText id="helper-password">Password should be at least 8 characters</FormHelperText>
          </FormControl>

          <FormControl margin="dense">
            <InputLabel htmlFor="password2">Confirm Password</InputLabel>
            <Input
              id="password2"
              type="password2"
              value={this.state.password2}
              onChange={this.onChange}
              errors={errors.password2}
              startAdornment={
                <InputAdornment position="start">
                  <LockOutlinedIcon />
                </InputAdornment>
              }>
            </Input>
          </FormControl>

          <Button 
            type="submit"
            variant="outlined" 
            color="primary" 
            className={classes.button}>
            Register
          </Button>
        </Grid>
        <Box display="flex" flexDirection="column" justifyContent="center" className={classes.section}>
        
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
  }
});


export default withStyles(styles, { withTheme: true })(Registration);