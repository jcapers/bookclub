import React from "react";
import { Component } from "react";
import { Link as RouterLink, withRouter } from 'react-router-dom';
// REDUX
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getBookshelves } from "../../actions/bookActions";
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
import Typography from '@material-ui/core/Typography';
// MATERIAL ICONS
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import bookReducer from "../../reducers/bookReducer";


class Bookshelf extends Component {

  constructor() {
    super();
    this.state = {
      errors: {}
    };
  }
  /*
  * React function on props being received.
  */
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  componentDidMount() {
    const key = {
      userID: this.props.auth.user.id
    }
    this.props.getBookshelves(key);
  }

  render() {
    const { classes } = this.props;
    const { auth, books } = this.props;
    const { errors } = this.state;

    console.log(books);

    return (
      <Box>
        <Typography variant="h5">
          Shelf: {books.bookshelves.data ? books.bookshelves.data[0].shelfName : "Loading..."}
        </Typography>
      </Box>
      
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

Bookshelf.propTypes = {
  getBookshelves: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  books: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  books: state.books,
  errors: state.errors
});

export default withRouter(connect(
  mapStateToProps, { getBookshelves }
)(withStyles(classes)(Bookshelf)))
