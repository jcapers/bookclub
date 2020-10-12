import React from "react";
import { Link as RouterLink } from 'react-router-dom';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
// MATERIAL ICONS
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';


export default function UserHome() {
  const classes = useStyles();
  const userDetails = useSelector((state) => state.auth.user);

  return (
    <Container className={classes.root}>
      <Box display="flex" flexDirection="column" justifyContent="center" className={classes.section}>
        <Typography variant="h5">
          Welcome back {userDetails.displayName}!
        </Typography>
      </Box>

      <Grid container justify="center" spacing={2}>
        <Grid xs={8} item>
          <Paper className={classes.shelf}>
            <Typography variant="h6">Bookshelf</Typography>
            <Grid container flexDirection="row" justify="space-around" spacing={2}>
              <Grid xs={6} item>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      style={{height: 500}}
                      className={classes.media}
                      image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546870952l/42036538.jpg"
                      title="Gideon the Ninth"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Gideon the Ninth
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid xs={6} item>
                <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        style={{height: 500}}
                        className={classes.media}
                        image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1596688809l/54830846.jpg"
                        title="Harrow the Ninth"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Harrow the Ninth
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Share
                      </Button>
                      <Button size="small" color="primary">
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
              </Grid>
            </Grid>
          </Paper>

        </Grid>
        <Grid xs item>
          <Paper className={classes.lists}>
            <Typography variant="h6">Reading List</Typography>
            <List dense={false}>
            <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Gideon the Ninth"
                />
                <Checkbox
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Harrow the Ninth"
                />
                <Checkbox
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Alecto the Ninth"
                />
                <Checkbox
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
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
}));