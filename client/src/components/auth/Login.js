import React from "react";
import { Component } from "react";
import { withRouter } from 'react-router-dom';
// REDUX
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
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
  * When authenticated, push user to welcome screen.
  */
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/bookshelf");
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
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

    this.props.loginUser(userDetails);
  }

  render() {
    const { classes } = this.props;
    const { errors } = this.state;

    return (
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
                }
                className={classnames("", {
                  invalid: errors.email
                })}>
              </Input>
              <FormHelperText error={true} id="helper-error-email">{errors.email}</FormHelperText>
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
                }
                className={classnames("", {
                  invalid: errors.password
                })}>
              </Input>
              <FormHelperText error={true} id="helper-error-password">{errors.password}</FormHelperText>
            </FormControl>
          </Box>

          <Box className={classes.section}> 
          <FormControl>
            <FormHelperText error={true} id="helper-error-creds">{errors.credentialsIncorrect}</FormHelperText>
              <Button 
                type="submit"
                variant="outlined" 
                color="primary" 
                className={classes.button}
              >
                Login
              </Button>
          </FormControl>

          </Box>
        </form>
    )
  }

}

const classes = (theme) => ({
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});


// export default withStyles(classes, { withTheme: true })(Login);
export default withRouter(connect(
  mapStateToProps, { loginUser }
)(withStyles(classes)(Login)))