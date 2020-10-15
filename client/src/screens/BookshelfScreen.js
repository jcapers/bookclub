import React from "react";
// REDUX
import { useSelector } from 'react-redux';
// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
// Components
import Bookshelf from '../components/books/Bookshelf';
import BookshelfForm from '../components/books/BookshelfForm';


export default function BookshelfScreen() {
  const classes = useStyles();
  const userDetails = useSelector((state) => state.auth.user);

  return (
    <Container className={classes.root}>
      <Box display="flex" flexDirection="column" justifyContent="center" className={classes.section}>
        <Typography variant="h5" className={classes.section}>
          Welcome back {userDetails.displayName}!
        </Typography>
        <Typography variant="h5" className={classes.section}>
          Bookshelves
        </Typography>
        <BookshelfForm />
      </Box>
      <Bookshelf />
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