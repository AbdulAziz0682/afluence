import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/afluence.png';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { MoreVert } from "@material-ui/icons";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/accountActions";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: theme.mixins.toolbar.minHeight
    },
    logo: {
      margin: 0,
      width: 48,
      padding: 0
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function TopBar(props){
    const classes = useStyles();
    let dispatch = useDispatch();
    let loggedIn = useSelector(state => state.account.loggedIn);
    let user = useSelector(state => state.account.user);
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
                    <IconButton edge="start" className={classes.logo} color="inherit" aria-label="menu">
                        <img src={logo} alt="afluence logo" width="100%"/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>{loggedIn ? (user ? user.name : '') : "Afluence" }</Typography>
                    {   loggedIn ? <> 
                        <IconButton onClick={handleMenuClick} color="inherit">
                            {loggedIn && <MoreVert />}
                        </IconButton>
                        </>
                        :<IconButton onClick={handleMenuClick} color="inherit">
                            <AccountCircleIcon />
                        </IconButton>
                    }
                    {loggedIn && <AccountCircleIcon />}
                    <Menu open={Boolean(anchor)} 
                        anchorEl={anchor}
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                        onClose={handleMenuClose}
                    >
                    {   loggedIn ? [
                            <MenuItem key="1" component={Link} to="/console" onClick={handleMenuClose}>Console</MenuItem>,
                            <MenuItem key="2" component={Link} to="/account" onClick={handleMenuClose}>Account</MenuItem>,
                            <MenuItem key="3" component={Link} to="/login" onClick={(e)=>{dispatch(logout()); handleMenuClose(e)}}>Logout</MenuItem>
                        ]
                        : [
                            <MenuItem key="4" component={Link} to="/" onClick={handleMenuClose}>Home</MenuItem>,
                            <MenuItem key="5" component={Link} to="/register" onClick={handleMenuClose}>Register</MenuItem>,
                            <MenuItem key="6" component={Link} to="/login" onClick={handleMenuClose}>Login</MenuItem>
                        ]
                    }
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    )
}