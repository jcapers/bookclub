import React from "react";
import { useState } from "react";
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from "../../actions/bookActions";
// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
// MATERIAL ICONS
import AddCircleIcon from '@material-ui/icons/AddCircle';
// PACKAGES
const isEmpty = require("is-empty");

export default function AddBookForm(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth.user);
  const [bookTitle, setBookTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [imageURI, setImageURI] = useState("");
  const [comment, setComment] = useState("")
  const [open, setOpen] = useState(false);
  const [createBtnDisabled, setCreateBtnDisabled] = useState(true);

  const onClickOpen = (event) => {
    event.preventDefault();
    setBookTitle("");
    setAuthor("");
    setImageURI("");
    setComment("");
    setCreateBtnDisabled(true);
    setOpen(true);
  };

  const onClickClose = (event) => {
    event.preventDefault();
    setOpen(false);
  };

  const onChangeBookTitle = (event) => {
    event.preventDefault();
    setBookTitle(event.target.value);
    setCreateBtnDisabled(isEmpty(bookTitle));
  };

  const onChangeAuthor = (event) => {
    event.preventDefault();
    setAuthor(event.target.value);
  };

  const onChangeImageURI = (event) => {
    event.preventDefault();
    setImageURI(event.target.value);
  };

  const onChangeComment = (event) => {
    event.preventDefault();
    setComment(event.target.value);
  };

  const onClickCreate = (event) => {
    event.preventDefault();
    let data = {
      userID: authUser.id,
      shelfID: props.shelfID,
      bookTitle: bookTitle,
      imageURI: imageURI,
      author: author,
      comment: comment
    };
    dispatch(addBook(data));
    setOpen(false);
  };

  return (
    <div>
      <IconButton 
          aria-label={`Open from to add book to ${props.shelfName}`} 
          className={classes.addButton}
          onClick={onClickOpen}>
        <AddCircleIcon />
      </IconButton>

      <Dialog open={open} onClose={onClickClose} aria-labelledby="create-bookshelf-dialog">
        <DialogTitle id="create-bookshelf-title">Add book</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="bookTitle"
            label="Book Title"
            onChange={onChangeBookTitle}
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="author"
            label="Author"
            onChange={onChangeAuthor}
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="imageURI"
            label="Image Link"
            onChange={onChangeImageURI}
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="comment"
            label="Comments"
            onChange={onChangeComment}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClickClose} color="primary">
            Cancel
          </Button>
          <Button disabled={createBtnDisabled} onClick={onClickCreate} color="primary">
            Add Book
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(2)
  },
  button: {
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  addButton: {
    color: '#1db246'
  },
}));
