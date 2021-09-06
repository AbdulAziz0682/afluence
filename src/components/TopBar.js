import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/afluence.png';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../redux/actions/accountActions";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: theme.mixins.toolbar.minHeight
    },
    logo: {
      margin: theme.spacing(0),
      width: 50
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function TopBar(props){
    const classes = useStyles();
    let dispatch = useDispatch();
    let loggedIn = useSelector(state => state.account.loggedIn);
    let [anchor, setAnchor] = useState(null);
    function handleMenuClick(event){
        setAnchor(event.currentTarget);
    }
    function handleMenuClose(){
        setAnchor(null);
    }
    return (
        <div className={classes.root}>
            <AppBar position="fixed" color="default">
                <Toolbar>
                    <IconButton edge="start" className={classes.logo} color="inherit" aria-label="menu" onClick={()=>dispatch(setLoggedIn(!loggedIn))}>
                        <img src={logo} width="100%"/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>{loggedIn ? "Afluence" : ' '}</Typography>
                    {!loggedIn && 
                        <><IconButton onClick={handleMenuClick} color="inherit">
                            <AccountCircleIcon />
                        </IconButton>
                        <Menu open={Boolean(anchor)} 
                            anchorEl={anchor}
                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                            onClose={handleMenuClose}
                        >
                            <MenuItem component={Link} to="/" onClick={handleMenuClose}>Home</MenuItem>
                            <MenuItem component={Link} to="/register" onClick={handleMenuClose}>Register</MenuItem>
                        </Menu></>
                    }
                </Toolbar>
            </AppBar>
        </div>
    )
}