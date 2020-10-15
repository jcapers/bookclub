import React from "react";
import { Link as RouterLink } from 'react-router-dom';
import { useHistory } from "react-router";
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from "../../actions/authActions";
// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// ICONS
import MenuIcon from '@material-ui/icons/Menu';
import MenuBookIcon from '@material-ui/icons/MenuBook';



export default function Navbar() {
  const classes = useStyles();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  // History hook
  const history = useHistory();
  // Dispatch Hook
  const dispatch = useDispatch();
  // Call logout dispatch action.
  const onClickLogout = (event) => {
    event.preventDefault();
    dispatch(logoutUser());
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <div className={classes.title}>
            <Typography variant="h5">
              <Link component={RouterLink} to="/" color="inherit" underline="none">
                Book Club <MenuBookIcon />
              </Link>
            </Typography>
          </div>
          {
            isAuth ? 
            <Button onClick={onClickLogout} variant="contained">
              Logout
            </Button> :
            <Button component={RouterLink} to="/login" variant="contained">
              Login
            </Button> 
          }
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(2)
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1
  },
}));
