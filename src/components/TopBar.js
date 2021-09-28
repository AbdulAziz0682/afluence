import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/afluence.png';
import account from '../assets/account.png';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/accountActions";

import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: theme.mixins.toolbar.minHeight
    },
    appBarZIndex: {
        zIndex: theme.zIndex.drawer + 1,
    },
    logo: {
      margin: 0,
      width: 35,
      padding: 0,
      [theme.breakpoints.down('sm')]:{
          marginLeft: -10
      }
    },
    title: {
      flexGrow: 1,
      marginLeft: 10,
      fontSize: 26,
      [theme.breakpoints.down('sm')]:{
          marginLeft: 3
      }
    },
  }));

export default function TopBar(props){
    const classes = useStyles();
    let dispatch = useDispatch();
    let history = useHistory();
    let state = useSelector(state => state);
    let loggedIn = useSelector(state => state.account.loggedIn);
    let [anchor, setAnchor] = useState(null);
    function handleMenuClick(event){
        setAnchor(event.currentTarget);
    }
    function handleMenuClose(){
        setAnchor(null);
    }
    useEffect(()=>{
        //For rerendering the component
    }, [state]);
    return (
        <div className={classes.root}>
            <AppBar position="fixed" color="white" className={classes.appBarZIndex + 'border-gray border-b shadow-none'}>
                <Toolbar className="items-center">
                    <IconButton edge="start" className={classes.logo} color="inherit" aria-label="menu">
                        <img src={logo} alt="afluence logo"/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title} style={{fontFamily: "'Montserrat', sans-serif"}}>{"amazethu" }</Typography>
                    {history.location.pathname === '/console' && 
                        <select className="bg-gray-50 rounded-lg border p-1 md:mr-9 w-14 md:w-auto text-xs md:text-normal">
                            {
                                [1].map(item => <option value="new dmgt service">new dmgt service</option>)
                            }
                        </select>
                    }
                    {   loggedIn ? <> 
                        <IconButton onClick={handleMenuClick} color="inherit">
                            {loggedIn && <MoreVert />}
                        </IconButton>
                        </>
                        :<IconButton onClick={handleMenuClick}  color="inherit">
                            <img src={account} alt="account" style={{width: '16px'}}/>
                        </IconButton>
                    }
                    {loggedIn && <img src={account} alt="account" style={{width: '16px'}} />}
                    <Menu open={Boolean(anchor)} 
                        anchorEl={anchor}
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                        onClose={handleMenuClose}
                    >
                    {   loggedIn ? [
                            <MenuItem key="1" component={Link} to="/projects" onClick={handleMenuClose}>Projects</MenuItem>,
                            <MenuItem key="2" component={Link} to="/account" onClick={handleMenuClose}>Account</MenuItem>,
                            <MenuItem key="3" component={Link} to="/login" onClick={(e)=>{dispatch(logout()); handleMenuClose(e)}}>Logout</MenuItem>
                        ]
                        : [
                            <MenuItem key="4" component={Link} to="/home" onClick={handleMenuClose}>Home</MenuItem>,
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