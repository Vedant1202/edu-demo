import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Login from '../login/login.component';
import Signup from '../signup/signup.component';

import LogoImage from './logo_i5t9wh.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  nav: {
    backgroundColor: "#ebebeb",
    paddingTop: '1%',
    paddingBottom: '1%',
    color: '#000'
  },
  menuButton: {
    paddingRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    paddingLeft: '5%'
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <AppBar position="fixed" className={classes.nav}>
            <Toolbar>
                <Typography variant="h3" align="left" className={classes.title}>
                    <img src={ LogoImage } alt="Logo"/>
                </Typography>
                < Login />
                < Signup />
            </Toolbar>
        </AppBar>
    </div>
  );
}
