import React from "react";
import { Component } from "react";
import { withRouter } from 'react-router-dom';
// REDUX
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getBookshelves, deleteBookshelf, deleteBook } from "../../actions/bookActions";
// MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
// MATERIAL ICONS
import DeleteIcon from '@material-ui/icons/Delete';
// COMPONENTS
import AddBookForm from './AddBookForm';
// PACKAGES
const isEmpty = require("is-empty");


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

  onClickDeleteShelf = (event) => {
    event.preventDefault();
    const shelfID = event.currentTarget.value;
    const userID = this.props.auth.user.id;
    const data = {
      userID: userID,
      shelfID: shelfID
    }
    this.props.deleteBookshelf(data);
  }

  onClickDeleteBook = (shelfID, bookID) => {
    console.log(shelfID);
    const userID = this.props.auth.user.id;
    const data = {
      userID: userID,
      shelfID: shelfID,
      bookID: bookID
    }
    this.props.deleteBook(data);
  }

  render() {
    const { classes } = this.props;
    const { books } = this.props;
    let bookshelves = !isEmpty(books.bookshelves) ? books.bookshelves : []
    console.log(this.errors);

    return (
      <div className={classes.root}>
        {bookshelves.map(shelf => (
          <GridList cellHeight={256} cols={12} spacing={8} className={classes.gridList}>
            <GridListTile key="Subheader" cols={12} style={{ height: 'auto' }}>
              <ListSubheader component="div" style={{ fontSize: 32, flexDirection: "row", display: "flex", alignItems: "center" }}>
                  {shelf.shelfName}
                  <AddBookForm shelfID={shelf._id} shelfName={shelf.shelfName} />
                  <IconButton 
                      aria-label={`Delete ${shelf.shelfName}`} 
                      color="secondary" 
                      value={shelf._id} 
                      onClick={this.onClickDeleteShelf}>
                    <DeleteIcon />
                  </IconButton>
              </ListSubheader>
            </GridListTile>
              {shelf.books.map(books => (
                <GridListTile key={books.imageURI} cols={3}>
                  <img className={classes.media} src={books.imageURI} alt={books.bookTitle} />
                  <GridListTileBar
                    className={classes.titleBar}
                    title={books.bookTitle}
                    subtitle={<span>by: {books.author}</span>}
                    actionIcon={
                      <IconButton 
                          aria-label={`delete ${books.bookTitle}`} 
                          onClick={() => this.onClickDeleteBook(shelf._id, books._id)} 
                          className={classes.icon}>
                        <DeleteIcon />
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
          </GridList>
        ))}
      </div>
      
    )
  }
}

const classes = (theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'theme.palette.background.paper,'
  },
  gridList: {
    width: 1000
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  section: {
    margin: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(1)
  },
  media: {
    width: 256,
    height: "100%",
    objectFit: "contain"
    
  }
});

Bookshelf.propTypes = {
  getBookshelves: PropTypes.func.isRequired,
  deleteBookshelf: PropTypes.func.isRequired,
  deleteBook: PropTypes.func.isRequired,
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
  mapStateToProps, { getBookshelves, deleteBookshelf, deleteBook }
)(withStyles(classes)(Bookshelf)))
