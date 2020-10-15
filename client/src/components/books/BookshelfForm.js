import React from "react";
import { useState } from "react";
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { createBookshelf } from "../../actions/bookActions";
// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
// MATERIAL ICONS

// PACKAGES
const isEmpty = require("is-empty");

export default function BookshelfForm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth.user);
  const [open, setOpen] = useState(false);
  const [shelfName, setShelfName] = useState("");
  const [createButtonOn, setCreateButtonOn] = useState(true);

  const onClickOpen = (event) => {
    event.preventDefault();
    setShelfName("");
    setCreateButtonOn(true);
    setOpen(true);
  };

  const onClickClose = (event) => {
    event.preventDefault();
    setOpen(false);
  };

  const onChange = (event) => {
    event.preventDefault();
    setShelfName(event.target.value);
    setCreateButtonOn(isEmpty(shelfName));
  };

  const onClickCreate = (event) => {
    event.preventDefault();
    let data = {
      userID: authUser.id,
      shelfName: shelfName
    };
    dispatch(createBookshelf(data));
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={onClickOpen} className={classes.button}>
        Create Bookshelf
      </Button>

      <Dialog open={open} onClose={onClickClose} aria-labelledby="create-bookshelf-dialog">
        <DialogTitle id="create-bookshelf-title">Create a new Bookshelf</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="shelfName"
            label="Bookshelf Name"
            onChange={onChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClickClose} color="primary">
            Cancel
          </Button>
          <Button disabled={createButtonOn} onClick={onClickCreate} color="primary">
            Create
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
}));
