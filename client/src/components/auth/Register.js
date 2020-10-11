import React from "react";
import { Component } from "react";
import { Link as RouterLink } from 'react-router-dom';
// MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
// MATERIAL ICONS
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


class Register extends Component {

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

    const newUser = {
      name: this.state.name,
      displayName: this.state.displayName,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    console.log(newUser);
  }

  render() {
    const { classes } = this.props;
    const { errors } = this.state;

    return (
      <form className={classes.form} onSubmit={this.onSubmit}>
        <Box className={classes.section}>
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
        </Box>

        <Box className={classes.section}>
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
            <FormHelperText id="helper-displayName">Name that you want others see</FormHelperText>
          </FormControl>
        </Box>

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
            <FormHelperText id="helper-password">Password at least 8 characters</FormHelperText>
          </FormControl>
        </Box>

        <Box className={classes.section}>
          <FormControl margin="dense">
            <InputLabel htmlFor="password2">Confirm Password</InputLabel>
            <Input
              id="password2"
              type="password"
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
        </Box>

        <Box className={classes.section}> 
          <Button 
            type="submit"
            variant="outlined" 
            color="primary" 
            className={classes.button}
          >
            Register
          </Button>
        </Box>
      </form>
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


export default withStyles(styles, { withTheme: true })(Register);