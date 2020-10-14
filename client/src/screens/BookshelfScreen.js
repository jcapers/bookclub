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


export default function BookshelfScreen() {
  const classes = useStyles();
  const userDetails = useSelector((state) => state.auth.user);

  return (
    <Container className={classes.root}>
      <Box display="flex" flexDirection="column" justifyContent="center" className={classes.section}>
        <Typography variant="h5" className={classes.section}>
          Welcome back {userDetails.displayName}!
        </Typography>
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
  },
  shelf: {

  },
  lists: {

  },
  media: {
    maxHeight: 256,
    maxWidth: 256,
    minHeight: 64,
    minWidth: 64,
    height: "56.25%",
    objectFit: "contain"
    
  }
}));